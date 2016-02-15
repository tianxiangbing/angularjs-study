"use strict";
describe('myApp.http module',function(){
    beforeEach(module('myApp.http'));
    var scope,ctrl,mockBackend,$rootScope;
    beforeEach(inject(function(_$httpBackend_,$rootScope,$controller,$http){
        mockBackend = _$httpBackend_;
        $rootScope= $rootScope;
        mockBackend.expect('GET','json/http').respond({"name":"tianxiangbing"});
        scope = $rootScope.$new();
        ctrl= $controller("httpController",{$scope:scope})
    }));

    it('should fetch names from server on load.',function(){
        expect(scope.name).toBeUndefined();
        mockBackend.flush();
        expect(scope.name).toEqual("tianxiangbing");
    });
});