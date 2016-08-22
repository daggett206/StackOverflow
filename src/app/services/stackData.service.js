(function () {

  /** @ngInject */
  function stackData( $http, API ) {

    function getQuestions( params ) {
      var question = params.question;
      var tags     = params.tags ? getTagsString( params.tags ) : '';
      return $http( {
        url: API.url + 'search/advanced?order=desc&sort=relevance&site=stackoverflow&q=' + question + tags
      } );
    }

    function getAllTags() {
      return $http( {
        url: API.url + '/tags?order=desc&sort=popular&site=stackoverflow'
      } );
    }

    function getTagsString( tags ) {
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
      getAllTags: getAllTags
    }

  }

  angular.module( 'stackOverflowApp' )
    .factory( '$stackData', stackData );


})();
