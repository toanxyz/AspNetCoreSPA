(function () {
    'use strict';

    angular
      .module('app')
      .config(routerConfig);

    function routerConfig($stateProvider) {
        $stateProvider
            .state('courseRegister', {
                parent: 'main',
                url: 'courseRegister',
                views: {
                    'content@main': {
                        templateUrl: 'app/components/courseRegister/courseRegister.html',
                        controller: 'CourseRegisterController',
                        controllerAs: 'vm'
                    }
                }
            });
    }

})();
