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
  function ResultListController($filter) {
    var vm = this;
    vm.orderBy = 'owner.display_name';
    vm.list.all = $filter('orderBy')(vm.list.all, vm.orderBy, true);
  }

  angular.module('stackOverflowApp')
    .component('soResultList', ResultList);

})();
