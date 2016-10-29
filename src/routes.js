(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  //first, we want that evrything go to the home if no good url
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  //routes
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })

  //categories page
  .state('category',{
    url: '/category',
    templateUrl: 'templates/category.html',
    controller: 'CategoryCtrl as catList',
    resolve: {
      menuCategory: ['MenuDataService', function (MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })

  //items pages
  .state('items',{
    url: '/items/{itemsCategory}',
    templateUrl: 'templates/items.html',
    controller: 'ItemsCtrl as cat',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.itemsCategory);
              }]
    }
  });

}

})();