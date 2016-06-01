(function () {
    'use strict';

    angular
        .module('app',
        [
            'ngCookies',
            'ui.router',
            'site'
        ]);

    angular.module('app').run(function ($rootScope, $templateCache, $state, $cookies) {
        $rootScope.$on('$viewContentLoaded', function () {
            $templateCache.removeAll();
        });

        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams, AuthenticationService) {
            var isLogin = toState.name === "login";
            var athenticated = isAuthenticated();
            if (isLogin) {
                if (athenticated) {
                    e.preventDefault();
                    $state.go(fromState.name);
                } else {
                    return;
                }
            }

            if (!athenticated) {
                // stop current execution
                e.preventDefault();

                // go to login
                $state.go('login');
            }
        });

        function isAuthenticated() {
            var cookie = $cookies.get('.AspNetCore.Identity.Application');

            if (cookie) {
                return true;
            }

            return false;
        }
    });

})();
