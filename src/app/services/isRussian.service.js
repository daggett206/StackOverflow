(function () {


    function isRussian() {

        var result;

        function get() {
            return result;
        }

        function check(text) {
            return result = /[а-я]/i.test(text);
        }

        return {
            check: check,
            get: get
        }

    }

    angular.module( 'stackOverflowApp' )
        .factory( '$isRussian', isRussian );
})();