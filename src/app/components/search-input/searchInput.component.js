(function () {

    var SearchInput = {
        controller: SearchInputController,
        templateUrl: 'app/components/search-input/search-input.html'
    };

    function SearchInputController() {
        // var vm = this;
        //
    }

    angular.module('stackOverflowApp')
        .component('soSearchInput', SearchInput);

})();