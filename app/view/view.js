"use strict";
angular.module('myApp.view',["ngRoute"])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/view/:id',{
            templateUrl:'view/view.html',
            controller:'ViewController',
            resolve:{
                repice:["RecipeLoader","$q",function(RecipeLoader,$q){
                    var delay = $q.defer();
                   setTimeout(function(){
                       delay.resolve({title:"hello",content:"content"});
                   },3000);
                    return delay.promise;
                }]
            }
        })
    }])
    .controller('ViewController',["$scope","$location","repice",function($scope,$location,repice){
        $scope.repice = repice;
    }])
