(function () {
'use strict';

angular.module('data')
.component('categoriesData', {
  templateUrl: 'templates/categoriesData.html',
  bindings: {
    categories: '<'
  }
});

})();