(function () {

    var Tag = {
        controller: TagController,
        templateUrl: 'app/components/tag/tag.html',
        bindings: {
            name: "@"
        }
    };

    /** @ngInject */
    function TagController() {}

    angular.module('stackOverflowApp')
        .component('soTag', Tag);

})();