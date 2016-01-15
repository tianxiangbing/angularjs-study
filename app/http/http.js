"use strict";
var app = angular.module("myApp.http",['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/http',{
        templateUrl:'http/http.html',
        controller:'httpController'
    });
}]);
app.controller('httpController',function($scope,$http){
    $http.get('json/http').success(function(r){
        $scope.name= r.name;
    });
});