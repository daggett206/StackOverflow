(function() {
    'use strict';

    angular
        .module('stackOverflowApp')
        .controller('AnswersController', AnswersController);

    /** @ngInject */
    function AnswersController() {
        // var vm = this;
        //
        // vm.awesomeThings = [];
        // vm.classAnimation = '';
        // vm.creationDate = 1471780249291;
        // vm.showToastr = showToastr;
        //
        // activate();
        //
        // function activate() {
        //   getWebDevTec();
        //   $timeout(function() {
        //     vm.classAnimation = 'rubberBand';
        //   }, 4000);
        // }
        //
        // function showToastr() {
        //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
        //   vm.classAnimation = '';
        // }
        //
        // function getWebDevTec() {
        //   vm.awesomeThings = webDevTec.getTec();
        //
        //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
        //     awesomeThing.rank = Math.random();
        //   });
        // }
    }
})();
