'use strict';
// This defines the main entry point for the
// AngularJS applications. It sets up dependencies and
// in-app routing.
(function() {

    var app = angular.module('app', ['ngRoute', 'ngGrid', 'restangular']);

    app.config(['$routeProvider', function($routeProvider) {

        // This makes app/keywords/KeywordsController.js handle the
        // http://localhost:8080/#/ URL
        $routeProvider.
            when('/', {
                templateUrl: 'app/keywords/partials/editor.html',
                controller: 'KeywordsController'
        });
    }]);
})();