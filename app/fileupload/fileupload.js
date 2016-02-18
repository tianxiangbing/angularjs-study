angular.module("myApp.fileupload", ["ngRoute"])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/fileupload", {
            templateUrl: "fileupload/fileupload.html",
            controller: 'FileuploadController'
        })
    }])
    .controller('FileuploadController', function ($scope) {
        $scope.text = "hello upload .. ";
        $scope.uploadFinished = function (result, i) {
            $scope.result = result;
        }
    });