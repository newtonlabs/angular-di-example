'use strict';

describe('Service: amxScore', function () {

  // load the service's module
  beforeEach(module('diExampleApp'));

  // instantiate service
  var amxScore;
  beforeEach(inject(function(_amxScore_) {
    amxScore = _amxScore_;
  }));

  it('should do something', function () {
    expect(amxScore.grade([1,3,4])).toBe(4);
  });

});
