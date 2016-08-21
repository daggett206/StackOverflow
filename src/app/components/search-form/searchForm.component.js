(function () {

    var SearchForm = {
        templateUrl: 'app/components/search-form/search-form.html',
        controller: SearchFormController
    };

    /** @ngInject */
    function SearchFormController($rootScope, $scope) {
        var vm       = this;
        vm.tags      = $rootScope.tags;
        vm.tagsModel = {};

    }

    angular.module('stackOverflowApp')
        .component('soSearchForm', SearchForm);

})();