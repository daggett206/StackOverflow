(function () {
    'use strict';

    angular
        .module('stackOverflowApp')
        .controller('QuestionsController', QuestionsController);

    /** @ngInject */
    function QuestionsController($stateParams, $stackData, $cacheFactory, $isRussian) {
        var vm            = this;
        var thisIsRussian = $isRussian.check($stateParams.question);

        vm.cache = $cacheFactory.get('questionsCache') || $cacheFactory('questionsCache');

        activate();

        function activate() {
            checkRequestData();
        }

        function checkRequestData() {
            if ( $stateParams.question === null || $stateParams.question === undefined ) {
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
                $stackData.getQuestions($stateParams, thisIsRussian)
                    .then(function (response) {
                        var thisIsEmptyRequest = response.data.items.length === 0;

                        if ( thisIsEmptyRequest ) {
                            showEmptyTemplate();
                        }
                        else {
                            vm.empty         = false;
                            vm.questionsList = response.data.items;
                            vm.cache.put('questionsFor' + cacheId, vm.questionsList);
                        }
                    })
            }
        }
    }
})();
