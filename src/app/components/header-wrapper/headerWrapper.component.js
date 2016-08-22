(function(){

    var HeaderWrapper = {
        controller: HeaderWrapperController,
        templateUrl: 'app/components/header-wrapper/header-wrapper.html'
    };

    /** @ngInject */
    function HeaderWrapperController() {
        var vm = this;
        vm.isOpen = false;
    }

    angular.module('stackOverflowApp')
        .component('soHeaderWrapper', HeaderWrapper);

})();
