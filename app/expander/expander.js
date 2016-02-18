var app = angular.module('myApp.expander', ['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/expander', {
        controller: "ExpanderController",
        templateUrl: 'expander/expander.html',
    })
}]);
app.controller('ExpanderController', ['$scope', function ($scope) {
    $scope.title = "Click me expander.";
    $scope.text = ' HI , therer folks,I am the content that was hidden but is now shown.';
    $scope.expanders = [
        {title: "title1111", text: "content1111"},
        {title: "title2222", text: "content2222"},
        {title: "title3333", text: "content3333"}
    ];
    $scope.myHTML = '<p style="color:red;">这是段落<em onmouseover="this.textContent=\'PSF\'">click here.</em>http://www.baidu.com/</p>'
}]);