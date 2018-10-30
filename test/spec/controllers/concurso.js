'use strict';

describe('Controller: ConcursoCtrl', function () {

  // load the controller's module
  beforeEach(module('simuladorMegaApp'));

  var ConcursoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConcursoCtrl = $controller('ConcursoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConcursoCtrl.awesomeThings.length).toBe(3);
  });
});
