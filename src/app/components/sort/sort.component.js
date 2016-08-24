(function () {

    var Sort = {
        templateUrl: 'app/components/sort/sort.html',
        controller: SortController,
        bindings: {
            event: "<",
            sortType: "=",
            sortReverse: "="
        }
    };

    /** @ngInject */
    function SortController( ) {}

    angular.module( 'stackOverflowApp' )
        .component( 'soSort', Sort );

})();
