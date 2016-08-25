(function () {

    var Sort = {
        templateUrl: 'app/components/sort/sort.html',
        bindings: {
            event: "<",
            sortType: "=",
            sortReverse: "="
        }
    };

    angular.module( 'stackOverflowApp' )
        .component( 'soSort', Sort );

})();
