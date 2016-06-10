(function () {
    'use strict';

    angular
      .module('app')
      .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');

        $stateProvider

        // nested list with custom controller
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('main', {
            url: '/main',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'vm'
        })

        // nested list with custom controller
        .state('main.courseRegister', {
            url: '/courseRegister',
            templateUrl: 'app/components/courseRegister/courseRegister.html',
            controller: 'CourseRegisterController',
            controllerAs: 'vm'
        })

        // nested list with just some random string data
        .state('main.student', {
            url: '/student',
            templateUrl: 'app/components/student/student.html',
            controller: 'StudentController',
            controllerAs: 'vm'
        })
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('extabs', {
            url: '/extabs',
            templateUrl: 'app/components/extabs/extabs.html',
            controller: function ($scope) {
                $scope.tabs = [
                    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
                    { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
                ];
            }
        });
    }
})();
