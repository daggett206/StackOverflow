(function () {

    /** @ngInject */
    function stackData($http, API) {

        function getQuestions(params, thisIsRussian) {
            var question = params.question;
            var tags     = params.tags ? getTagsString(params.tags) : '';
            var site     = thisIsRussian ? 'ru.stackoverflow' : 'stackoverflow';
            return $http({
                url: API.url + 'search/advanced?order=desc&sort=relevance&site=' + site + '&q=' + question + tags
            });
        }

        function getTopUserQuestions(id, thisIsRussian) {
            var site = thisIsRussian ? 'ru.stackoverflow' : 'stackoverflow';
            return $http({
                url: API.url + 'users/'+ id +'/tags/all/top-questions?pagesize=5&order=desc&sort=activity&site=' + site
            });
        }

        function getAllTags() {
            return $http({
                url: API.url + '/tags?order=desc&sort=popular&site=stackoverflow'
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


        return {
            getQuestions: getQuestions,
            getAllTags: getAllTags,
            getTopUserQuestions: getTopUserQuestions
        }

    }

    angular.module('stackOverflowApp')
        .factory('$stackData', stackData);


})();
