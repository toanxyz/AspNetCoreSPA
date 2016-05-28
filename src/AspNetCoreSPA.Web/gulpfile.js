/// <binding BeforeBuild='index' />
"use strict";

var gulp = require("gulp"),
    gnf = require('gulp-npm-files'),
    inject = require('gulp-inject');

var webroot = "./wwwroot/";

var paths = {
    appJs: webroot + "app/**/*.js",
    appCss: webroot + "styles/**/*.css",

    boostrapCss: webroot + "libraries/bootstrap/dist/css/bootstrap.css",

    script: webroot + "scripts/**/*.js",

    jquery: webroot + "libraries/jquery/dist/jquery.js",
    bootstrap: webroot + "libraries/bootstrap/dist/js/bootstrap.js",
    angular: webroot + "libraries/angular/angular.js",
    angularRouter: webroot + "libraries/angular-ui-router/release/angular-ui-router.js",
};

// This task will copy neccessary JS from node_modules to our lib folder
// This will copy libs defined in "dependencies" in package.json
gulp.task('lib', function () {
    gulp.src(gnf(), { base: './node_modules/' }).pipe(gulp.dest(webroot + "libraries/"));
});

gulp.task('inject:index', function () {
    var target = gulp.src(webroot + 'app/index.html');

    var sources = [
        paths.jquery,
        paths.bootstrap,
        paths.angular,
        paths.angularRouter,

        paths.script,
        paths.appJs,

        paths.boostrapCss,
        paths.appCss
    ];

    var src = gulp.src(sources, { read: false });

    return target
        .pipe(inject(src, { ignorePath: '/wwwroot', addRootSlash: true }))
        .pipe(gulp.dest(webroot + 'app'));
});
