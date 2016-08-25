(function () {

  var Header = {
    templateUrl: 'app/components/header/header.html',
    bindings: {
      event: '<'
    }
  };

  angular.module( 'stackOverflowApp' )
    .component( 'soHeader', Header );

})();
