(function () {

  var Result = {
    templateUrl: 'app/components/result-list/result-list.html',
    controller: ResultController,
    bindings: {
      data: "<"
    }
  };

  /** @ngInject */
  function ResultController() {
    var vm = this;
    vm.name = vm.data.answer_count;
  }

  angular.module('stackOverflowApp')
    .component('soResult', Result);

})();
