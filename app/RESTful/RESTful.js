"use strict";
var app = angular.module('myApp.RESTful',['myApp.REST','ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/RESTful',{
        templateUrl:'RESTful/RESTful.html',
        controller:'RESTController'
    })
}]);
app.controller('RESTController',['$scope','CreditCard',function($scope,CreditCard){
    var cards = CreditCard.query();
    cards.$resolved =true;
    $scope.cards = cards;
    console.log($scope.cards)
}]);