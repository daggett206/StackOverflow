(function () {
    'use strict';

    var Answer = {
        templateUrl: 'app/components/answer/answer.html',
        bindings: {
            answer: "<"
        }
    };

    angular.module('stackOverflowApp')
        .component('soAnswer', Answer);

})();
