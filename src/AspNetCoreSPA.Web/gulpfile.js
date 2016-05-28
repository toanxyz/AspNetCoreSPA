/// <binding />
"use strict";

var gulp = require("gulp"),
    gnf = require('gulp-npm-files');

var webroot = "./wwwroot/";

var paths = {
    js: webroot + "app/**/*.js",
    css: webroot + "css/**/*.css"
};

// This task will copy neccessary JS from node_modules to our lib folder
// This will copy libs defined in "dependencies" in package.json
gulp.task('lib', function () {
    gulp.src(gnf(), { base: './node_modules/' }).pipe(gulp.dest(webroot + "lib/"));
});
