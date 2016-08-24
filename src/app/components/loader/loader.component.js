(function () {
  'use strict';

  var Loader = {
    templateUrl: 'app/components/loader/loader.html'
  };

  angular.module('stackOverflowApp')
    .component('soLoader', Loader);

})();
