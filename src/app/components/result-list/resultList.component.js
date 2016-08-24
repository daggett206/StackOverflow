(function () {
  'use strict';

  var ResultList = {
    templateUrl: 'app/components/result-list/result-list.html',
    controller: ResultListController,
    bindings: {
      list: "="
    }
  };

  /** @ngInject */
  function ResultListController($filter, $scope) {
    var vm           = this;
    vm.sortType      = 'answer_count';
    vm.sortReverse   = 'true';
    vm.updateResults = updateResults;

    var unwatch = $scope.$watch('$ctrl.list.all', function (val) {
      if (val !== null) {
        vm.filteredItems = val;
        unwatch();
      }
    });

    function updateResults(search) {
      var filtered = $filter('filter')(vm.list.all, search);
      filtered = $filter('orderBy')(filtered, 'title');
      vm.filteredItems = filtered;
    }

  }

  angular.module('stackOverflowApp')
    .component('soResultList', ResultList);

})();
