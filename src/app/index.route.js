(function () {
    'use strict';

    angular
        .module('stackOverflowApp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('questions', {
                url: '/questions',
                templateUrl: 'app/questions/questions.html',
                controller: 'QuestionsController',
                controllerAs: 'questions'
            })

            .state('answers', {
                url: '/answers',
                templateUrl: 'app/answers/answers.html',
                controller: 'AnswersController',
                controllerAs: 'answers'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
