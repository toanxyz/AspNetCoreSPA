(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    function LoginController($scope, $http, $state, AuthenticationService) {
        var vm = this;

        vm.loginInfo = {
            UserName: "test01",
            Password: "Qwer!@#12345"
        };

        vm.login = function () {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.loginInfo, function (response) {
                if (response == "OK") {
                    $state.go('main');
                } else {
                    vm.dataLoading = false;
                }
            });
        }
    }
})();
