(function () {

    /**
     * Use 'template' against 'templateUrl' for using $templateCache.get() method.
     * It avoids bug with first animation 'ng-if'
     * */
    var SearchBox = {
        template: ['$templateCache', function ( $templateCache ) {
          return $templateCache.get('app/components/search-box/search-box.html')
        }],
        bindings: {
            event: "<"
        }
    };

    angular.module('stackOverflowApp')
        .component('soSearchBox', SearchBox);

})();
