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
  function ResultController( $stackData, $cacheFactory, $state ) {
    var vm          = this;
    var question_id = vm.data.question_id;
    var user_id     = vm.data.owner.user_id;

    vm.goToAnswers = goToAnswers;
    vm.cache       = $cacheFactory.get( 'topQuestions' ) || $cacheFactory( 'topQuestions' );

    activate();

    function activate() {
      if ( angular.isDefined( vm.tagsQuestions ) ) vm.getTagsQuestions = getTagsQuestions;
      if ( angular.isDefined( vm.userQuestions ) ) vm.getUserQuestions = getUserQuestions;
    }

    function getTagsQuestions( tag ) {
      if ( vm.cache.get( 'tags_' + tag ) ) {
        vm.tagsQuestions = vm.cache.get( 'tags_' + tag );
      }
      else {
        $stackData.getTopTagsQuestions( tag )
          .then(
            function ( response ) {
              setValues( response, 'tagsQuestions', tag, 'tag' );
            }
          )
      }
    }

    function getUserQuestions() {
      if ( vm.cache.get( 'users_' + vm.data.owner.display_name ) ) {
        vm.userQuestions = vm.cache.get( 'users_' + vm.data.owner.display_name );
      }
      else {
        $stackData.getTopUserQuestions( user_id )
          .then(
            function ( response ) {
              setValues( response, 'userQuestions', vm.data.owner.display_name, 'user' )
            }
          )
      }
    }

    function setValues( response, model, subject, key ) {
      vm[model]      = response.data.items;
      vm[model].info = ' ' + key + ' ' + subject;
      vm.cache.put( key + 's_' + subject, vm[model] );
    }

    function goToAnswers() {
      $state.go( 'answers', {question_id: question_id} );
    }
  }

  angular.module( 'stackOverflowApp' )
    .component( 'soResult', Result );

})();
