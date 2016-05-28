(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    function MainController($scope) {
        var vm = this;

        alert("hi");
    }
})();
