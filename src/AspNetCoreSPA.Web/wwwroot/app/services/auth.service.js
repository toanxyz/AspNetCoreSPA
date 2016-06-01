(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthenticationService', AuthenticationService);

    function AuthenticationService($http, $cookies) {
        var service = {};

        service.Login = Login;

        return service;

        function Login(userInfo, callback) {
            $http.post('/api/account/login', JSON.stringify(userInfo))
                .success(function (response) {
                    callback(response);
                });
        }
    }
})();