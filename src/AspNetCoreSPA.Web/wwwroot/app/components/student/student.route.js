(function () {
    'use strict';

    angular
      .module('app')
      .config(routerConfig);

    routerConfig.$inject = ['$stateProvider'];

    function routerConfig($stateProvider) {
        $stateProvider
            .state('student', {
                parent: 'main',
                url: 'student',
                views: {
                    'content@main': {
                        templateUrl: 'app/components/student/student.html',
                        controller: 'StudentController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
})();
