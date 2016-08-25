(function () {
    'use strict';

    var AnswersList = {
        templateUrl: 'app/components/answers-list/answers-list.html',
        bindings: {
            list: "<"
        }
    };

    angular.module('stackOverflowApp')
        .component('soAnswersList', AnswersList);

})();
