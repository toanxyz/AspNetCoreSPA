(function () {
    'use strict';

    angular
        .module('app')
        .controller('StudentController', StudentController);

    function StudentController($scope, $http) {
        var vm = this;

        vm.students = [];

        vm.createStudentInput = {};
        vm.searchStudent = {};

        vm.createStudent = function () {
            $http.post("api/student/createStudent", JSON.stringify(vm.createStudentInput))
                .then(function (response) {
                    // Re-load data
                    vm.students = response.data;

                    // Close dialog
                    $('#formCreateStudent').modal('toggle');
                });
        }
        
        vm.searchStudent = function () {
            $http.get("api/student/searchStudent", {
                params: { firstName: vm.searchStudent.FirstName }
            }).then(function (respone) {
                site.log.debug(respone);
                vm.students = respone.data;
            });
        }

        $http.get("api/student/getAll")
            .then(function(response) {
                vm.students = response.data;
            });
    }
})();
