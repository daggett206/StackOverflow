(function () {

  var Header = {
    templateUrl: 'app/components/header/header.html',
    bindings: {
      isOpen: '='
    }
  };

  angular.module( 'stackOverflowApp' )
    .component( 'soHeader', Header );

})();
