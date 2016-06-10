//(function () {
//    'use strict';

//    angular
//        .module('app')
//        .controller('CourseListController', CourseListController);

//    function CourseListController($scope) {
//        var vm = this;
//    }
//})();
(function () {
    'use strict';

    angular
        .module('app')
        .controller('CourseListController', CourseListController);

    function CourseListController($scope, $http) {
        var vm = this;

        vm.courses = [];

        $http.get("api/course/getAll",
            {
                apiMock: true
            })
            .then(function (response) {
                vm.courses = response.data;
            });
    }
})();
