"use strict";
angular.module("myApp.add",["ngRoute"]).
    config(["$routeProvider",function($routeProvider){
        $routeProvider.when('/add',{
            templateUrl:'add/add.html',
            controller:"AddController"
        })
    }]).
    controller('AddController',["$scope","$location","Recipe",function($scope,$location,Recipe){
        $scope.recipe = new Recipe({
            ingredients:[{}]
        });
        $scope.Add = function(){
            $scope.recipe.$save(function(){
                $location.path('/view/'+recipe.id)
            });
        }
    }])