'use strict';

describe('Service: localJson', function () {

  // load the service's module
  beforeEach(module('diExampleApp'));

  // instantiate service
  var localJson;
  beforeEach(inject(function(_localJson_) {
    localJson = _localJson_;
  }));

  it('should do something', function () {
    expect(!!localJson).toBe(true);
  });

});
