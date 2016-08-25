(function () {
  'use strict';

  var ResultList = {
    templateUrl: 'app/components/result-list/result-list.html',
    controller: ResultListController,
    bindings: {
      list: "<",
      event: "<"
    }
  };

  /** @ngInject */
  function ResultListController( $cacheFactory, $filter, $scope ) {
    var vm           = this;
    vm.updateResults = updateResults;
    vm.setCache      = setCache;
    vm.getFromCache  = getFromCache;

    vm.$onInit = function () {
      vm.sortType    = 'answer_count';
      vm.sortReverse = 'true';
      vm.cache       = $cacheFactory.get( 'topQuestions' ) || $cacheFactory( 'topQuestions' );
    };

    var unwatch = $scope.$watch( '$ctrl.list.all', function ( val ) {
      if ( val !== null ) {
        vm.filteredItems = val;
        unwatch();
      }
    } );

    function setCache( key, value ) {
      vm.cache.put( key, value );
    }

    function getFromCache( key ) {
      return vm.cache.get( key );
    }

    function updateResults( search ) {
      var filtered     = $filter( 'filter' )( vm.list.all, search );
      filtered         = $filter( 'orderBy' )( filtered, 'title' );
      vm.filteredItems = filtered;
    }

  }

  angular.module( 'stackOverflowApp' )
    .component( 'soResultList', ResultList );

})();
