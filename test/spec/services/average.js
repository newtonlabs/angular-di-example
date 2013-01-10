'use strict';

describe('Service: average', function () {

  // load the service's module
  beforeEach(module('diExampleApp'));

  // instantiate service
  var average;
  beforeEach(inject(function(_average_) {
    average = _average_;
  }));

  it('calculates the average grade from an array of grades', function () {
    expect(average.grade([1,2,3])).toBe(2);
  });

});
