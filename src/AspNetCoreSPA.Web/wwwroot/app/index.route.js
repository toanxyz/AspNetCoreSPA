(function () {
    'use strict';

    angular
      .module('app')
      .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('home', {
              url: '/',
              templateUrl: 'app/main/main.html',
              controller: 'MainController',
              controllerAs: 'mainCtrl'
          });
    }
})();
