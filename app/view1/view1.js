'use strict';

angular.module('myApp.list', ['ngRoute', "myApp.services"])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'view1/view1.html',
            resolve: {
                recipes: ["MultiRecipeLoader", function (MultiRecipeLoader) {
                    return MultiRecipeLoader();
                }]
            },
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$location', 'recipes', function ($scope, $location, recipes) {
        $scope.recipes = recipes;
    }]);