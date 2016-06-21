(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$http', '$state', 'auth0Service'];

    function LoginController($scope, $http, $state, auth0Service) {
        var vm = this;

        vm.loginInfo = { UserName: "test01", Password: "Qwer!@#12345" };

        vm.login = login;

        function login() {
            auth0Service.login(vm.loginInfo, function (response) {
                if (response == "OK") {
                    auth0Service.authenticate();
                    $state.go('main');
                }
            });
        }
    }
})();
