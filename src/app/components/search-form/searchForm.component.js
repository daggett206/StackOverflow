(function () {

  var SearchForm = {
    templateUrl: 'app/components/search-form/search-form.html',
    controller: SearchFormController,
    bindings: {
      event: "<?"
    }
  };

  /** @ngInject */
  function SearchFormController( $stackData, $cacheFactory, $state ) {
    var vm    = this;
    vm.$onInit = function () {
      vm.cache  = $cacheFactory.get( 'tagsCache' ) || $cacheFactory( 'tagsCache' );
      vm.model  = {
        tags: {},
        question: ''
      };
      vm.submit = submit;

      getAllAvalibleTags();
    };


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

    function submit(e) {
      e.preventDefault();
      $state.go( 'questions', vm.model);
      if (vm.event) vm.event();
    }
  }

  angular.module( 'stackOverflowApp' )
    .component( 'soSearchForm', SearchForm );

})();
