(function () {
    'use strict';

    angular
      .module('app')
      .config(routerConfig);

    function routerConfig($stateProvider) {
        $stateProvider
            .state('course', {
                parent: 'courseRegister',
                url: '/course/:courseId',
                views: {
                    'content@courseRegister': {
                        templateUrl: 'app/components/course/course.html',
                        controller: 'CourseController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
})();
