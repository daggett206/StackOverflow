(function () {

  var Result = {
    templateUrl: 'app/components/result/result.html',
    controller: ResultController,
    bindings: {
      data: "<"
    }
  };

  /** @ngInject */
  function ResultController($isRussian) {
    var vm = this;
    var question_id = vm.data.question_id;
    var use_id = vm.data.owner.user_id;
    vm.counter = vm.data.answer_count;
    vm.name = vm.data.owner.display_name;
    vm.title = vm.data.title;
    vm.tags = vm.data.tags;

    $isRussian.get();

    debugger
  }

  angular.module('stackOverflowApp')
    .component('soResult', Result);

})();
