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
      if ( $stateParams.question === null || $stateParams.question === undefined ) {
        showEmptyTemplate();
        return;
      }
      getQuestions();
    }

    function showEmptyTemplate() {
      vm.empty = true;
    }

    function getQuestions() {
      $stackData.getQuestions( $stateParams )
        .then( function ( response ) {
          var thisIsEmptyRequest = response.data.items.length === 0;

          if ( thisIsEmptyRequest ) {
            showEmptyTemplate();
          } else {
            vm.empty = false;
            vm.questionsList = response.data.items;
          }
        })
    }
  }
})();
