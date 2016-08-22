(function () {

  var SearchForm = {
    templateUrl: 'app/components/search-form/search-form.html',
    controller: SearchFormController
  };

  /** @ngInject */
  function SearchFormController( $stackData, $cacheFactory, $state ) {
    var vm    = this;
    vm.cache  = $cacheFactory.get( 'tagsCache' ) || $cacheFactory( 'tagsCache' );
    vm.model  = {
      tags: {},
      question: ''
    };
    vm.submit = submit;

    getAllAvalibleTags();

    function getAllAvalibleTags() {
      if ( vm.cache.get( 'tags' ) ) {
        vm.tags = vm.cache.get( 'tags' );
      }
      else {
        $stackData.getAllTags()
          .then( function ( response ) {
            vm.tags = response.data.items;
            vm.cache.put( 'tags', vm.tags );
          } )
      }
    }
    function submit() {
      $state.go( 'questions', vm.model);
    }
  }

  angular.module( 'stackOverflowApp' )
    .component( 'soSearchForm', SearchForm );

})();
