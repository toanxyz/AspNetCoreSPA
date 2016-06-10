(function () {
    'use strict';

    angular
      .module('app')
      .config(routerConfig);

    function routerConfig($stateProvider) {
        $stateProvider
            .state('courseList', {
                parent: 'main',
                url: 'courseList',
                views: {
                    'content@main': {
                        templateUrl: 'app/components/courseList/courseList.html',
                        controller: 'CourseListController',
                        controllerAs: 'vm'
                    }
                }
            });
    }

})();
