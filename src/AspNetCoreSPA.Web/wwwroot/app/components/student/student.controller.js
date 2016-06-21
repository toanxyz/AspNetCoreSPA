(function () {
    'use strict';

    angular
        .module('app')
        .controller('StudentController', StudentController);

    StudentController.$inject = ['$scope', '$http'];

    function StudentController($scope, $http) {
        var vm = this;

        vm.students = [];
        vm.createStudentInput = {};
        vm.searchStudent = {};

        vm.createStudent = createStudent;
        vm.searchStudent = searchStudent;

        activate();

        function createStudent() {
            $http.post("api/student/createStudent", JSON.stringify(vm.createStudentInput))
                .then(function (response) {
                    // Re-load data
                    vm.students = response.data;

                    // Close dialog
                    $('#formCreateStudent').modal('toggle');
                });
        }

        function searchStudent() {
            $http.get("api/student/searchStudent", {
                params: { firstName: vm.searchStudent.FirstName }
            }).then(function (respone) {
                site.log.debug(respone);
                vm.students = respone.data;
            });
        }

        function activate() {
            $http.get("api/student/getAll", { apiMock: true })
                .then(function (response) {
                    vm.students = response.data;
                });
        }
    }
})();
