(function () {
    'use strict';

    angular
      .module('app')
      .config(routerConfig);

    function routerConfig($stateProvider) {
        $stateProvider
            .state('home',
            {
                url:'/home',
                views: {
                    'home@': {
                        templateUrl: 'app/components/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
})();
