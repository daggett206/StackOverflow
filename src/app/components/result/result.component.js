(function () {
    'use strict';

    var Result = {
        templateUrl: 'app/components/result/result.html',
        controller: ResultController,
        bindings: {
            data: "<",
            userQuestions: "=?",
            tagsQuestions: "=?"
        }
    };

    /** @ngInject */
    function ResultController($stackData, $cacheFactory, $state) {
        var vm          = this;
        var question_id = vm.data.question_id;
        var user_id     = vm.data.owner.user_id;

        vm.goToAnswers = goToAnswers;
        vm.cache       = $cacheFactory.get('topQuestions') || $cacheFactory('topQuestions');

        activate();

        function activate() {
            if ( vm.tagsQuestions !== undefined ) {
                vm.getTagsQuestions = getTagsQuestions;
            }
            if ( vm.userQuestions !== undefined ) {
                vm.getUserQuestions = getUserQuestions;
            }
        }

        function getTagsQuestions(tag) {
            if ( vm.cache.get('tags_' + tag) ) {
                vm.tagsQuestions = vm.cache.get('tags_' + tag);
            }
            else {
                $stackData.getTopTagsQuestions(tag)
                    .then(function (response) {
                        vm.tagsQuestions      = response.data.items;
                        vm.tagsQuestions.info = ' tag ' + tag;
                        vm.cache.put('tags_' + tag, vm.tagsQuestions);
                    })
            }
        }

        function getUserQuestions() {
            if ( vm.cache.get('user_' + user_id) ) {
                vm.userQuestions = vm.cache.get('user_' + user_id);
            }
            else {
                $stackData.getTopUserQuestions(user_id)
                    .then(function (response) {
                        vm.userQuestions      = response.data.items;
                        vm.userQuestions.info = ' user ' + vm.data.owner.display_name;
                        vm.cache.put('user_' + user_id, vm.userQuestions);
                    })
            }
        }

        function goToAnswers() {
            $state.go('answers', {question_id: question_id});
        }
    }

    angular.module('stackOverflowApp')
        .component('soResult', Result);

})();
