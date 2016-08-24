(function () {
  'use strict';

  var Sort = {
    templateUrl: 'app/components/sort/sort.html',
    controller: SortController
  };

  /** @ngInject */
  function SortController() {
  }

  angular.module('stackOverflowApp')
    .component('soSort', Sort);

})();
