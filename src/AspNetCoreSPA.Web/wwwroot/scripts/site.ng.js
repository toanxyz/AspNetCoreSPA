(function (site, angular) {

    if (!angular) {
        return;
    }

    site.ng = site.ng || {};

    site.ng.http = {
        defaultError: {
            message: 'Ajax request did not succeed!',
            details: 'Error detail not sent by server.'
        },

        logError: function (error) {
            site.log.error(error);
        },

        showError: function (error) {
            if (error.details) {
                return site.message.error(error.details, error.message || site.ng.http.defaultError.message);
            } else {
                return site.message.error(error.message || site.ng.http.defaultError.message);
            }
        },

        handleTargetUrl: function (targetUrl) {
            location.href = targetUrl;
        },

        handleUnAuthorizedRequest: function (messagePromise, targetUrl) {
            if (messagePromise) {
                messagePromise.done(function () {
                    if (!targetUrl) {
                        location.reload();
                    } else {
                        site.ng.http.handleTargetUrl(targetUrl);
                    }
                });
            } else {
                if (!targetUrl) {
                    location.reload();
                } else {
                    site.ng.http.handleTargetUrl(targetUrl);
                }
            }
        },

        handleResponse: function (response, defer) {
            var originalData = response.data;

            if (originalData.success === true) {
                response.data = originalData.result;
                defer.resolve(response);

                if (originalData.targetUrl) {
                    site.ng.http.handleTargetUrl(originalData.targetUrl);
                }
            } else if (originalData.success === false) {
                var messagePromise = null;

                if (originalData.error) {
                    messagePromise = site.ng.http.showError(originalData.error);
                } else {
                    originalData.error = defaultError;
                }

                site.ng.http.logError(originalData.error);

                response.data = originalData.error;
                defer.reject(response);

                if (originalData.unAuthorizedRequest) {
                    site.ng.http.handleUnAuthorizedRequest(messagePromise, originalData.targetUrl);
                }
            } else { //not wrapped result
                defer.resolve(response);
            }
        }
    }

    function endsWith(str, suffix) {
        if (suffix.length > str.length) {
            return false;
        }

        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    var siteModule = angular.module('site', []);

    siteModule.config([
        '$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push(function ($q, $injector) {

                return {

                    'request': function (config) {
                        return config;
                    },

                    'response': function (response) {
                        if (!response.config || !response.config.site || !response.data) {
                            return response;
                        }

                        var defer = $q.defer();

                        site.ng.http.handleResponse(response, defer);

                        return defer.promise;
                    },

                    'responseError': function (ngError) {
                        var state = $injector.get('$state');
                        var auth0 = $injector.get('auth0Service');
                        var error = {
                            message: ngError.data || site.ng.http.defaultError.message,
                            details: ngError.statusText || site.ng.http.defaultError.details,
                            responseError: true
                        }

                        if (ngError.status === 401) {
                            auth0.clear();
                            state.go("login");
                        } else {
                            site.ng.http.showError(error);
                        }

                        return $q.reject(ngError);
                    }

                };
            });
        }
    ]);
})((site || (site = {})), (angular || undefined));
