'use strict';

describe('Service: parseCom', function () {

  // load the service's module
  beforeEach(module('diExampleApp'));

  // instantiate service
  var parseCom;
  beforeEach(inject(function(_parseCom_) {
    parseCom = _parseCom_;
  }));

  it('should do something', function () {
    expect(!!parseCom).toBe(true);
  });

});
