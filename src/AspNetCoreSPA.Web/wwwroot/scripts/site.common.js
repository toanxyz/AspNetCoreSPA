var site = site || {};
(function ($) {

    site.appPath = site.appPath || '/';

    site.pageLoadTime = new Date();

    site.log = site.log || {};

    site.log.levels = {
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        FATAL: 5
    };

    site.log.level = site.log.levels.DEBUG;

    site.log.log = function (logObject, logLevel) {
        if (!window.console || !window.console.log) {
            return;
        }

        if (logLevel != undefined && logLevel < site.log.level) {
            return;
        }

        console.log(logObject);
    };

    site.log.debug = function (logObject) {
        site.log.log("DEBUG: ", site.log.levels.DEBUG);
        site.log.log(logObject, site.log.levels.DEBUG);
    };

    site.log.info = function (logObject) {
        site.log.log("INFO: ", site.log.levels.INFO);
        site.log.log(logObject, site.log.levels.INFO);
    };

    site.log.warn = function (logObject) {
        site.log.log("WARN: ", site.log.levels.WARN);
        site.log.log(logObject, site.log.levels.WARN);
    };

    site.log.error = function (logObject) {
        site.log.log("ERROR: ", site.log.levels.ERROR);
        site.log.log(logObject, site.log.levels.ERROR);
    };

    site.log.fatal = function (logObject) {
        site.log.log("FATAL: ", site.log.levels.FATAL);
        site.log.log(logObject, site.log.levels.FATAL);
    };

    site.message = site.message || {};

    var showMessage = function (message, title) {
        alert((title || '') + ' ' + message);

        if (!$) {
            site.log.warn('site.message can not return promise since jQuery is not defined!');
            return null;
        }

        return $.Deferred(function ($dfd) {
            $dfd.resolve();
        });
    };

    site.message.info = function (message, title) {
        site.log.warn('site.message.info is not implemented!');
        return showMessage(message, title);
    };

    site.message.success = function (message, title) {
        site.log.warn('site.message.success is not implemented!');
        return showMessage(message, title);
    };

    site.message.warn = function (message, title) {
        site.log.warn('site.message.warn is not implemented!');
        return showMessage(message, title);
    };

    site.message.error = function (message, title) {
        site.log.warn('site.message.error is not implemented!');
        return showMessage(message, title);
    };

    site.message.confirm = function (message, titleOrCallback, callback) {
        site.log.warn('site.message.confirm is not implemented!');

        if (titleOrCallback && !(typeof titleOrCallback == 'string')) {
            callback = titleOrCallback;
        }

        var result = confirm(message);
        callback && callback(result);

        if (!$) {
            site.log.warn('site.message can not return promise since jQuery is not defined!');
            return null;
        }

        return $.Deferred(function ($dfd) {
            $dfd.resolve();
        });
    };
})(jQuery);