var app = angular.module("myApp.http",[]);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('http',{
        templateUrl:'http/http.html',
        controller:'httpController'
    });
}]);