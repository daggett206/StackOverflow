(function () {

    var SearchBox = {
        templateUrl: 'app/components/search-box/search-box.html',
        controller: SearchBoxController,
        bindings: {
            isOpen: "="
        }
    };

    /** @ngInject */
    function SearchBoxController() {
    }

    angular.module('stackOverflowApp')
        .component('soSearchBox', SearchBox);

})();
