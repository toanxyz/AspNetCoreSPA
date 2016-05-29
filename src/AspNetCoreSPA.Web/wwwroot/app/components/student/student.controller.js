(function () {
    'use strict';

    angular
        .module('app')
        .controller('StudentController', StudentController);

    function StudentController($scope, $http) {
        var vm = this;

        vm.students = [];

        vm.createStudentInput = {};

        vm.createStudent = function () {
            $http.post("api/student/createStudent", JSON.stringify(vm.createStudentInput))
                .then(function (response) {
                    // Re-load data
                    vm.students = response.data;

                    // Close dialog
                    $('#formCreateStudent').modal('toggle');
                });
        }

        $http.get("api/student/getAll")
            .then(function(response) {
                vm.students = response.data;
            });
    }
})();
