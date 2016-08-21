(function () {

    var SearchForm = {
        templateUrl: 'app/components/search-form/search-form.html',
        controller: SearchFormController
    };

    /** @ngInject */
    function SearchFormController($rootScope, $timeout) {
        var vm = this;
        vm.tagsModel = {};

        $timeout(function () {
            vm.tags = $rootScope.tags;
        }, 0)
    }

    angular.module('stackOverflowApp')
        .component('soSearchForm', SearchForm);

})();