(function(){

    var Header = {
        templateUrl: 'app/components/header/header.html',
        controller: HeaderController,
        bindings: {
            isOpen: '='
        }
    };

    /** @ngInject */
    function HeaderController() {}

    angular.module('stackOverflowApp')
        .component('soHeader', Header);

})();