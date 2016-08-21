(function () {

    var Tag = {
        controller: TagController,
        templateUrl: 'app/components/tag/tag.html',
        bindings: {
            name: "@",
            tagsModel: "="
        }
    };

    function TagController() {
        // var vm = this;

    }

    angular.module('stackOverflowApp')
        .component('soTag', Tag);

})();