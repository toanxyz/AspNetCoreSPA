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
            })
            .state('student', {
                url: '/student',
                templateUrl: 'app/components/student/student.html',
                controller: 'StudentController',
                controllerAs: 'studentCtrl'
            });
    }
})();
