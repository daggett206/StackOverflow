(function () {
    'use strict';

    angular
        .module('stackOverflowApp')
        .controller('AnswersController', AnswersController);

    /** @ngInject */
    function AnswersController($stateParams, $stackData, $cacheFactory) {
        var vm   = this;
        vm.cache = $cacheFactory.get('answersCache') || $cacheFactory('answersCache');

        activate();

        function activate() {
            checkParams();
        }

        function checkParams() {
            if ( $stateParams.question_id === null || $stateParams.question_id === undefined ) {
                showEmptyTemplate();
                return;
            }
            getAnswers($stateParams.question_id);
        }

        function showEmptyTemplate() {
            vm.empty = true;
        }

        function getAnswers(questionId) {
            if ( vm.cache.get('answer_' + questionId) ) {
                vm.answersList = vm.cache.get('answer_' + questionId);
            }
            else {
                $stackData.getAnswers(questionId)
                    .then(function (response) {
                        var thisIsEmptyRequest = response.data.items.length === 0;
                        if ( thisIsEmptyRequest ) {
                            showEmptyTemplate();
                        }
                        else {
                            vm.empty           = false;
                            vm.answersList = response.data.items;
                            vm.cache.put('answer_' + questionId, vm.answersList);
                        }
                    })
            }
        }
    }
})();
