(function () {
    'use strict';

    var Answer = {
        templateUrl: 'app/components/answer/answer.html',
        controller: AnswerController,
        bindings: {
            answer: "<"
        }
    };

    /** @ngInject */
    function AnswerController() {
    }

    angular.module('stackOverflowApp')
        .component('soAnswer', Answer);

})();
