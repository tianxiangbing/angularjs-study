"use strict";
describe('REST test...',function(){
    beforeEach(function(){
        jasmine.addMatchers({
            toEqualData: function(util, customEqualityTesters) {
                return {
                    compare: function(actual, expected) {
                        return {
                            pass: angular.equals(actual, expected)
                        };
                    }
                };
            }
        });
    });
    beforeEach(module('myApp.RESTful'));
    var scope,ctrl,mockBackend;
    beforeEach(inject(function(_$httpBackend_,$rootScope,$controller){
        scope = $rootScope.$new();
        mockBackend  = _$httpBackend_;
        ctrl = $controller("RESTController",{$scope:scope});
    }));
    it('cards test Restful',function(){
        //console.log(scope.cards)
        //expect(scope.cards).toEqual([]);
        mockBackend.expect('GET','json/recipes').respond([{"id":1,"title":"hello world."}]);
        //expect(scope.cards).toBeUndefined();
        mockBackend.flush();
        expect(scope.cards).toEqualData([{"id":1,"title":"hello world."}]);
    });
});