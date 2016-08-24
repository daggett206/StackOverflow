(function () {
  'use strict';

  /** @ngInject */
  function LoadingInterceptor($rootScope) {
    'use strict';

    return {
      request: function(config) {
        $rootScope.loading = true;
        return config;
      },
      response: function(response) {
        $rootScope.loading = false;
        return response;
      }
    };
  }

  angular.module('stackOverflowApp')
    .factory('$loading', LoadingInterceptor);


})();

