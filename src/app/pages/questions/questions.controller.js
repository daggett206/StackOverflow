(function () {
    'use strict';

    /**
     * This controller almost like AnswersController, bun only for now.
     * I keep it them as separated for further expandability.
     * */

    /** @ngInject */
    function QuestionsController($stateParams, $stackData, $cacheFactory) {
        var vm   = this;
        vm.cache = $cacheFactory.get('questionsCache') || $cacheFactory('questionsCache');

        vm.questionsList = {
            user: null,
            tags: null,
            all: null
        };

        activate();

        function activate() {
            checkParams();
        }

        function checkParams() {
            if ( $stateParams.question === null || angular.isUndefined($stateParams.question)) {
                showEmptyTemplate();
                return;
            }
            getQuestions($stateParams.question);
        }

        function showEmptyTemplate() {
            vm.empty = true;
        }

        function getQuestions(cacheId) {
            if ( vm.cache.get('questionsFor' + cacheId) ) {
                vm.questionsList = vm.cache.get('questionsFor' + cacheId);
            }
            else {
                $stackData.getQuestions($stateParams)
                    .then(function (response) {
                        var thisIsEmptyRequest = response.data.items.length === 0;

                        if ( thisIsEmptyRequest ) {
                            showEmptyTemplate();
                        }
                        else {
                            vm.empty             = false;
                            vm.questionsList.all = response.data.items;
                            vm.cache.put('questionsFor' + cacheId, vm.questionsList);
                        }
                    })
            }
        }
    }

    angular
      .module('stackOverflowApp')
      .controller('QuestionsController', QuestionsController);
})();
