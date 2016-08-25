(function(){

    var HeaderWrapper = {
        controller: HeaderWrapperController,
        templateUrl: 'app/components/header-wrapper/header-wrapper.html'
    };

    /** @ngInject */
    function HeaderWrapperController() {
        var vm = this;
        vm.isOpen = false;
        vm.triggerPopup = triggerPopup;

        function triggerPopup() {
          vm.isOpen = !vm.isOpen;
        }
    }

    angular.module('stackOverflowApp')
        .component('soHeaderWrapper', HeaderWrapper);

})();
