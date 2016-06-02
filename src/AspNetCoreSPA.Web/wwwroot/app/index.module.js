(function () {
    'use strict';

    angular
        .module('app',
        [
            'ngStorage',
            'ui.router',
            'site'
        ]);

    angular.module('app').run(function ($rootScope, $templateCache, $state, auth0Service) {
        $rootScope.$on('$viewContentLoaded', function () {
            $templateCache.removeAll();
        });

        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
            var isLogin = toState.name === "login";
            var athenticated = auth0Service.isAuthenticated();
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
    });

})();
