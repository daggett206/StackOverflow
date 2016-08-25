(function () {
    'use strict';

    var Tag = {
        templateUrl: 'app/components/tag/tag.html',
        bindings: {
            name: "@"
        }
    };

    angular.module('stackOverflowApp')
        .component('soTag', Tag);

})();
