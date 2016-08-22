+
    (function () {

  var ResultList = {
    templateUrl: 'app/components/result-list/result-list.html',
    controller: ResultListController,
    bindings: {
      list: "<"
    }
  };

  /** @ngInject */
  function ResultListController() {
  }

  angular.module('stackOverflowApp')
    .component('soResultList', ResultList);

})();
