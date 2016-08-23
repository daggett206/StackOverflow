(function () {
    'use strict';

    /** @ngInject */
    function stackData($http, API) {

        var thisIsRussian;

        function getQuestions(params) {
            var question  = params.question;
            var tags      = params.tags ? getTagsString(params.tags) : '';
            thisIsRussian = isRussian(params.question);
            var site      = thisIsRussian ? 'ru.stackoverflow' : 'stackoverflow';
            return $http({
                url: API.url + 'search/advanced?order=desc&sort=relevance&site=' + site + '&q=' + question + tags
            });
        }

        function getTopUserQuestions(id) {
            var site = thisIsRussian ? 'ru.stackoverflow' : 'stackoverflow';
            return $http({
                url: API.url + 'users/' + id + '/tags/all/top-questions?order=desc&sort=activity&site=' + site
            });
        }

        function getTopTagsQuestions(tag) {
            var site = thisIsRussian ? 'ru.stackoverflow' : 'stackoverflow';
            return $http({
                url: API.url + 'questions?order=desc&sort=votes&tagged='+ tag +'&site=' + site
            });
        }

        function getAllTags() {
            return $http({
                url: API.url + 'tags?order=desc&sort=popular&site=stackoverflow'
            });
        }

        function getTagsString(tags) {
            if ( tags != '' ) {
                var fragment = '&tagged=';
                for ( var key in tags ) {
                    if ( tags[key] === true ) {
                        fragment += key + ';';
                    }
                }
                return fragment;
            }

            return '';
        }

        function getAnswers(id) {
            var site = thisIsRussian ? 'ru.stackoverflow' : 'stackoverflow';
            return $http({
                url: API.url + 'questions/'+ id +'/answers?order=desc&filter=withbody&sort=activity&site=' + site
            });

        }


        return {
            getQuestions: getQuestions,
            getAllTags: getAllTags,
            getTopUserQuestions: getTopUserQuestions,
            getTopTagsQuestions: getTopTagsQuestions,
            getAnswers: getAnswers
        }

    }

    angular.module('stackOverflowApp')
        .factory('$stackData', stackData);

    function isRussian(text) {
        return /[а-я]/i.test(text);
    }


})();
