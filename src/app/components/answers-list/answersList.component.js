(function () {
    'use strict';

    var AnswersList = {
        templateUrl: 'app/components/answers-list/answers-list.html',
        controller: AnswersListController,
        bindings: {
            list: "<"
        }
    };

    /** @ngInject */
    function AnswersListController() {
    }

    angular.module('stackOverflowApp')
        .component('soAnswersList', AnswersList);

})();
