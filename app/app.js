'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.list',
    'myApp.view',
    'myApp.version',
    'myApp.services'
    , "myApp.directives",
    "myApp.add",
    "myApp.http",
    "myApp.RESTful",
    "myApp.REST",
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/list'});
    }])