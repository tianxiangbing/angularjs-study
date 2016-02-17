'use strict';

describe('myApp.list module', function() {

  beforeEach(module('myApp.list'));
  var $scope ;
  var recipes = [{}];
  beforeEach(inject(function($rootScope,$controller){
    $scope = $rootScope.$new();
  }));
  describe('list controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl',{$scope:$scope,recipes:recipes});
      expect(view1Ctrl).toBeDefined();
    }));
    it('count ....',inject(function($controller){
      var controller = $controller('View1Ctrl',{$scope:$scope,recipes:recipes});
      expect($scope.recipes.length).toBe(1)
    }));
  });
});