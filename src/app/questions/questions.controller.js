(function () {
  'use strict';

  angular
    .module( 'stackOverflowApp' )
    .controller( 'QuestionsController', QuestionsController );

  /** @ngInject */
  function QuestionsController( $stateParams, $stackData ) {
    var vm = this;

    activate();

    function activate() {
      checkRequestData();
    }

    function checkRequestData() {
      for ( var key in $stateParams ) {
        if ( $stateParams[key] === null || $stateParams[key] === undefined ) {
          showEmptyTemplate();
          return;
        }
      }
      getQuestions();
    }

    function showEmptyTemplate() {
      vm.empty = true;
    }

    function getQuestions() {
      $stackData.getQuestions( $stateParams )
        .then( function ( response ) {
          var thisIsEmptyRequest = response.items.length === 0;

          if ( thisIsEmptyRequest ) {
            showEmptyTemplate();
          } else {
            vm.empty = false;
            vm.questionsList = response.items;
          }
        })
    }

    //
    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1471780249291;
    // vm.showToastr = showToastr;
    //
    // activate();
    //
    // function activate() {
    //   getWebDevTec();
    //   $timeout(function() {
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }
    //
    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }
    //
    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();
    //
    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }
  }
})();
