(function () {
    'use strict';

    angular
        .module('app')
        .controller('SubjectController', SubjectController);

    function SubjectController($scope, $http) {
        var vm = this;

        vm.subjects = [];

        vm.createClassInput = {};
        vm.searchClass = {};

        
        $http.get("api/subject/getAll",
            {
                apiMock: true
            })
            .then(function (response) {
                vm.subjects = response.data;
            });
    }
})();
