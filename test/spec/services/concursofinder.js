'use strict';

describe('Service: concursoFinder', function () {

  // load the service's module
  beforeEach(module('simuladorMegaApp'));

  // instantiate service
  var concursoFinder;
  beforeEach(inject(function (_concursoFinder_) {
    concursoFinder = _concursoFinder_;
  }));

  it('should do something', function () {
    expect(!!concursoFinder).toBe(true);
  });

});
