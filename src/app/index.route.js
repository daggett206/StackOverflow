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
                templateUrl: 'app/pages/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('questions', {
                url: '/questions/:question',
                params: {
                    tags: null,
                    question: null
                },
                templateUrl: 'app/pages/questions/questions.html',
                controller: 'QuestionsController',
                controllerAs: 'questions'
            })

            .state('answers', {
                url: '/answers/:question_id',
                templateUrl: 'app/pages/answers/answers.html',
                controller: 'AnswersController',
                controllerAs: 'answers',
                params: {
                    question_id: null
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();
