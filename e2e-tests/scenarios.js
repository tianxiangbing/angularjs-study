'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/list");
  });


  describe('list', function() {

    beforeEach(function() {
      browser.get('index.html#/list');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/add');
    });


    it('should render view2 when user navigates to /add', function() {
      expect(element.all(by.css('button')).first().getText()).
        toMatch(/submit/);
    });

  });
});
