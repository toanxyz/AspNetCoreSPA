//angular.module('app', []);
//angular.module('app').controller('TabsDemoCtrl', function ($scope, $window) {
//    $scope.tabs = [
//      { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
//      { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
//    ];

//    $scope.alertMe = function () {
//        setTimeout(function () {
//            $window.alert('You\'ve selected the alert tab!');
//        });
//    };

//    $scope.model = {
//        name: 'Tabs'
//    };
//});

(function () {
    'use strict';

    angular
        .module('app')
        .controller('TabsDemoCtrl', TabsDemoCtrl);

    function TabsDemoCtrl($scope) {
        var vm = this;

        vm.tabs = [];

        var tabs = [
        { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
        { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
        ];

        $scope.tabs = tabs;
    }
})();
