(function () {
'use strict';

angular.module('data')
.component('itemsData', {
  templateUrl: 'templates/itemsData.html',
  bindings: {
    items: '<'
  }
});

})();