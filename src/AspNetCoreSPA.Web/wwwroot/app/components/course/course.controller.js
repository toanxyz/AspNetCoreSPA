(function () {
    'use strict';

    angular
        .module('app')
        .controller('CourseController', CourseController);

    function CourseController($scope, $http, $stateParams) {
        var vm = this;

        vm.courses = [];
        
        $http.get("api/course/getAll",
            {
                apiMock: true
            })
            .then(function(response) {
                var courses = response.data;                
                for (var index = 0; index < courses.length; index++) {
                    if (courses[index].courseId == $stateParams.courseId) {                        
                        vm.courses.push(courses[index]);
                        break;
                    }
                }
            });
    }

})();
