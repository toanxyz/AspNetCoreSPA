(function () {
    'use strict';

    angular
        .module('app')
        .factory('auth0Service', auth0Service);

    function auth0Service($http, $sessionStorage) {
        var service = {};

        service.login = function (userInfo, callback) {
            $http.post('/api/account/login', JSON.stringify(userInfo))
                .success(function (response) {
                    callback(response);
                });
        }

        service.authenticate = function () {
            $sessionStorage.isAuthenticated = true;
        }

        service.clear = function () {
            $sessionStorage.isAuthenticated = false;
        }

        service.isAuthenticated = function () {
            if ($sessionStorage.isAuthenticated) {
                return true;
            }
            return false;
        }

        return service;
    }
})();