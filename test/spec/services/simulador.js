'use strict';

describe('Service: simulador', function () {

  // load the service's module
  beforeEach(module('simuladorMegaApp'));

  // instantiate service
  var simulador;
  beforeEach(inject(function (_simulador_) {
    simulador = _simulador_;
  }));

  it('should do something', function () {
    expect(!!simulador).toBe(true);
  });

});
