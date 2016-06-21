(function () {
    'use strict';

    angular
      .module('app')
      .config(routerConfig);

    routerConfig.$inject = ['$stateProvider'];

    function routerConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'login@': {
                        templateUrl:'app/login/login.html',
                        controller: 'LoginController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
})();
