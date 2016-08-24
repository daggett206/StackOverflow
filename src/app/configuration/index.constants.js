(function () {
    'use strict';

    angular
        .module('stackOverflowApp')
        .constant('TEXTS', {
            headerTitle: 'Задайте свой вопрос'
        })
        .constant('API', {
            url: 'http://api.stackexchange.com/2.2/'
        });


})();
