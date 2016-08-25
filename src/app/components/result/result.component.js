(function () {
  'use strict';

  var Result = {
    templateUrl: 'app/components/result/result.html',
    controller: ResultController,
    bindings: {
      data: "<",
      event: "<?",
      setCache: "<?",
      getCache: "<?"
    }
  };

  /** @ngInject */
  function ResultController( $stackData, $state ) {
    var vm = this;
    var question_id = vm.data.question_id;
    var user_id     = vm.data.owner.user_id;
    vm.goToAnswers  = goToAnswers;

    vm.$onInit = function () {
      activate();
    };

    function activate() {
      if ( angular.isDefined( vm.event ) ) {
        vm.getTagsQuestions = getTagsQuestions;
        vm.getUserQuestions = getUserQuestions;
      }
    }

    function getTagsQuestions( tag ) {
      if ( vm.getCache( tag ) ) {
        vm.event('tags', vm.getCache( tag ));
      }
      else {
        $stackData.getTopTagsQuestions( tag )
          .then(
            function ( response ) {
              setValues( response, 'tags', tag, 'tag' );
            }
          )
      }
    }

    /**
     * This function is almost like getTagsQuestions(), but only for now.
     * I keep them as separated for further extensibility.
     * */
    function getUserQuestions() {
      if ( vm.getCache( vm.data.owner.display_name ) ) {
        vm.event('user', vm.getCache( vm.data.owner.display_name ));
      }
      else {
        $stackData.getTopUserQuestions( user_id )
          .then(
            function ( response ) {
              setValues( response, 'user', vm.data.owner.display_name, 'user' )
            }
          )
      }
    }

    function setValues( response, model, subject, key ) {
      response.data.items.info = ' ' + key + ' ' + subject;
      vm.event( model, response.data.items );
      vm.setCache( subject, response.data.items );

    }

    function goToAnswers( text ) {
      $state.go( 'answers', {text: text, question_id: question_id} );
    }
  }

  angular.module( 'stackOverflowApp' )
    .component( 'soResult', Result );

})();
