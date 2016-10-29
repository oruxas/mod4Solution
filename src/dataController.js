(function () {

 angular.module('Data')
 .controller('DataController', DataController);
console.log('controller file happening');

DataController.$inject = ['$scope', 'MenuDataService'];
 function DataController($scope, MenuDataService){
     console.log('controller happening')
      MenuDataService.getAllCategories().then(function(result){
         $scope.categories = result;
         
     });

      MenuDataService.getItemsForCategory().then(function(result){
         $scope.items = result;
         
     });
     
     console.log(JSON.stringify($scope.categories));
}

}());