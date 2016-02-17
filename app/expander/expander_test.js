'use strict';
describe('App.expander module', function () {
    var $scope;
    beforeEach(module('myApp.expander'));
    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
    }));
    describe('controller', function () {
        it('should ...', inject(function ($controller) {
            var view1Ctrl = $controller('ExpanderController', {$scope: $scope});
            expect($scope.title).toEqual('Click me expander.');
            expect(view1Ctrl).toBeDefined();
        }));
        it('accords ...', inject(function ($controller) {
            var viewCtrl = $controller('ExpanderController', {$scope: $scope});
            expect($scope.expanders.length).toEqual(3);
        }));
    });
});