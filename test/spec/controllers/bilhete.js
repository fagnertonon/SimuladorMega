'use strict';

describe('Controller: BilheteCtrl', function () {

  // load the controller's module
  beforeEach(module('simuladorMegaApp'));

  var BilheteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BilheteCtrl = $controller('BilheteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BilheteCtrl.awesomeThings.length).toBe(3);
  });
});
