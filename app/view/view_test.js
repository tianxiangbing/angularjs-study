'use strict';

describe('myApp.view module', function() {

    beforeEach(module('myApp.view'));
    var $scope ;
    beforeEach(inject(function($rootScope,$controller){
        $scope = $rootScope.$new();
    }));

    describe('ViewController', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var view1Ctrl = $controller('ViewController',{$scope:$scope,repice:[]});
            expect(view1Ctrl).toBeDefined();
        }));
    });
});