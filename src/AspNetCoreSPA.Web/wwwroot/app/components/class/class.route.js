(function () {
    'use strict';

    angular
      .module('app')
      .config(routerConfig);

    function routerConfig($stateProvider) {
        $stateProvider
            .state('class', {
                parent: 'main',
                url: 'class',
                views: {
                    'content@main': {
                        templateUrl: 'app/components/class/class.html',
                        controller: 'ClassController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
})();
