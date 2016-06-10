(function () {
    'use strict';

    angular
        .module('app')
        .controller('ClassController', ClassController);

    function ClassController($scope, $http) {
        var vm = this;

        vm.classes = [];

        vm.createClassInput = {};
        vm.searchClass = {};

        vm.createStudent = function () {
            $http.post("api/class/createClass", JSON.stringify(vm.createClassInput))
                .then(function (response) {
                    // Re-load data
                    vm.classes = response.data;

                    // Close dialog
                    $('#formCreateClass').modal('toggle');
                });
        }
        
        vm.searchClass = function () {
            $http.get("api/class/searchClass", {
                params: { className: vm.searchClass.ClassName }
            }).then(function (respone) {
                site.log.debug(respone);
                vm.classes = respone.data;
            });
        }

        $http.get("api/class/getAll",
            {
                apiMock: true
            })
            .then(function(response) {
                vm.classes = response.data;
            });
    }
})();
