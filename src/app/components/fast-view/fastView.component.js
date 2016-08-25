(function () {
    'use strict';

    var FastView = {
        templateUrl: 'app/components/fast-view/fast-view.html',
        controller: FastViewController,
        bindings: {
            list: "<"
        }
    };

    /** @ngInject */
    function FastViewController($scope) {
        var vm = this;
        vm.results = {};
        vm.closeView = closeView;

        var unwatch = $scope.$watch('$ctrl.list', function (val) {
            if (val !== null) {
                vm.results.all = val.user || val.tags;
                unwatch();
            }
        });

        function closeView() {
            vm.results.all = null;
            vm.list.user = null;
            vm.list.tags = null;
        }
    }

    angular.module('stackOverflowApp')
        .component('soFastView', FastView);

})();
