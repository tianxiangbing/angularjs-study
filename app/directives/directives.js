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
        scope: {title: "=expanderTitle"},
        template:'<div>'+
            '<div class="title" ng-click="toggle()">{{title}}</div>'+
            '<div class="body" ng-show="showMe" ng-transclude></div>'+
            '</div>',
        link:function(scope,element,attrs){
            scope.showMe = false;
            scope.toggle=function(){
                scope.showMe=!scope.showMe;
                //alert(scope.showMe)
            }
        }
    }
});
directives.directive('expander2', function () {
    return {
        restrict: "EA",
        replace: true,
        transclude: true,
        scope: {title: '=expanderTitle'},
        templateUrl: 'template/expander.html',
        link: function (scope, element, attrs) {
            var titleElement = angular.element(element.children().eq(0));
            var bodyElement = angular.element(element.children().eq(1));
            titleElement.bind('click', toggle);
            function toggle() {
                bodyElement.toggleClass('closed');
            }
        }
    }
});
directives.directive('accordion', function () {
    return {
        restrict: "EA",
        replace: true,
        transclude: true,
        template: "<div ng-transclude></div>",
        controller: function () {
            var expanders = [];
            this.gotOpened = function (selectedExpander) {
                angular.forEach(expanders, function (item) {
                    if (selectedExpander != item.scope) {
                        var bodyElement = angular.element(item.element.children().eq(1));
                        bodyElement.addClass('closed')
                    }
                });
            }
            this.addExpander = function (expander) {
                expanders.push(expander);
            }
        }
    }
});
directives.directive("expander3", function () {
    return {
        restrict: "EA",
        replace: true,
        transclude: true,
        require: '^?accordion',
        scope: {title: '=expanderTitle'},
        templateUrl: 'template/expander.html',
        link: function (scope, element, attrs, accordionController) {
            accordionController.addExpander({scope: scope, element: element});
            var titleElement = angular.element(element.children().eq(0));
            var bodyElement = angular.element(element.children().eq(1));
            titleElement.bind('click', toggle);
            function toggle() {
                bodyElement.toggleClass('closed');
                accordionController.gotOpened(scope);
            }
        }
    }
})