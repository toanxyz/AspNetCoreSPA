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
        };
        
        vm.searchStudent = function () {
            $http.get("api/student/searchStudent", {
                params: { firstName: vm.searchStudent.FirstName }
            }).then(function (response) {
                // this callback will be called asynchronously
                // when the response is available
                site.log.debug(response);
                vm.students = response.data;
            }, function errorCallback(response){
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                site.log.debug(response);
                vm.students = {};
            });
        };

        vm.editStudent = function (studentID) {
            $http.get("api/student/editStudent", {
                params: { ID: studentID }
            }).then(function (response) {
                // this callback will be called asynchronously
                // when the response is available
                site.log.debug(response);
                vm.students = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                site.log.debug(response);
                vm.students = {};
            });
        };

        vm.viewStudent = function () {
            $http.get("api/student/searchStudent", {
                params: { firstName: vm.searchStudent.FirstName }
            }).then(function (response) {
                // this callback will be called asynchronously
                // when the response is available
                site.log.debug(response);
                vm.students = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                site.log.debug(response);
                vm.students = {};
            });
        };

        vm.deleteStudent = function (studentID) {
            $http.get("api/student/deleteStudent", {
                params: { ID: studentID }
            }).then(function (response) {
                // this callback will be called asynchronously
                // when the response is available
                site.log.debug(response);
                vm.students = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                site.log.debug(response);
                vm.students = {};
            });
        };

        $http.get("api/student/getAll")
            .then(function(response) {
                vm.students = response.data;
            });
    }
})();
