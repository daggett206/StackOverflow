(function () {
    'use strict';

    angular
        .module('stackOverflowApp')
        .config(config);

    /** @ngInject */
    function config($locationProvider) {

        $locationProvider.html5Mode(true);

    }

})();
