(function () {
    'use strict';

    angular
        .module('stackOverflowApp')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $stackData) {
        $stackData.getAllTags()
            .then(function (response) {
                $rootScope.tags = response.data.items;
            })
    }

})();
