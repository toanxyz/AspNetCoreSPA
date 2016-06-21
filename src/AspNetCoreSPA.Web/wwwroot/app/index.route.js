(function () {
    'use strict';

    angular
      .module('app')
      .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routerConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }
})();
