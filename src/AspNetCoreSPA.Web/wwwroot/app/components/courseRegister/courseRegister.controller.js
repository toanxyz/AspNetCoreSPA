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
        .controller('CourseRegisterController', CourseRegisterController);

    function CourseRegisterController($scope, $http) {
        var vm = this;
        $scope.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
        ];
        $scope.model = {
            name: 'Tabs'
        };
        vm.courses = [];

        $http.get("api/course_list/getAll",
            {
                apiMock: true
            })
            .then(function (response) {
                vm.courses = response.data;
            });
    }
})();
