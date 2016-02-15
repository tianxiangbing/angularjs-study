"use strict";
var directives = angular.module("myApp.directives", []);
directives.directive('butterbar',["$rootScope",function($rootScope){
    return {
        link:function(scope,element,attrs){
            element.addClass('hide');
            $rootScope.$on('$routeChangeStart',function(){
                element.removeClass('hide');
            });
            $rootScope.$on('$routeChangeSuccess',function(){
                element.addClass('hide');
            });
        }
    }
}]);
directives.directive('focus',function(){
    return{
        link:function(scope,element,attrs){
            element[0].focus();
        }
    }
});

directives .directive('test',function(){
    return {
        template:"<div>abctest</div>",
        replace:true,
        restrict:'E'
    }
});
directives.run(function($templateCache){
    $templateCache.put('hereTemplate.html','<div>here</div>');
})
directives.directive('hello', function () {
    return {
        templateUrl:'template/helloTemplate.html',
        replace:true,
        restrict:"E"
    }
});
directives.directive('here', function () {
    return {
        templateUrl:'hereTemplate.html',
        replace:true,
        restrict:"E"
    }
});
directives.directive('expander',function(){
    return{
        restrict:"EA",
        replace:true,
        transclude:true,
        scope:{title:"@expanderTitle"},
        template:'<div>'+
            '<div class="title" ng-click="toggle()">{{title}}</div>'+
            '<div class="body" ng-show="showMe" ng-transclude></div>'+
            '</div>',
        link:function(scope,element,attrs){
            scope.showMe = false;
            scope.toggle=function(){
                scope.showMe=!scope.showMe;
            }
        }
    }
});