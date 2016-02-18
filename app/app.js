'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngSanitize',
    'myApp.list',
    'myApp.view',
    'myApp.version',
    'myApp.services',
    "myApp.directives",
    "myApp.add",
    "myApp.http",
    "myApp.RESTful",
    "myApp.REST",
    "myApp.expander",
    "myApp.fileupload",
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/list'});
    }])