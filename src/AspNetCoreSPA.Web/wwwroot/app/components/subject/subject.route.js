(function () {
    'use strict';

    angular
      .module('app')
      .config(routerConfig);

    function routerConfig($stateProvider) {
        $stateProvider
            .state('subject',
            {
                url:'/subject',
                views: {
                    'subject@': {
                        templateUrl: 'app/components/subject/subject.html',
                        controller: 'SubjectController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
})();
