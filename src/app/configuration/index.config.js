(function () {
  'use strict';

  angular
    .module( 'stackOverflowApp' )
    .config( config );

  /** @ngInject */
  function config( $locationProvider, $httpProvider ) {
    //if it is not ie
    if ( !/*@cc_on!@*/0 ) $locationProvider.html5Mode( true );

    $httpProvider.interceptors.push( '$loading' );
  }

})();
