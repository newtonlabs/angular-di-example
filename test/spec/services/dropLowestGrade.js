'use strict';

describe('Service: dropLowestGrade', function () {

  // load the service's module
  beforeEach(module('diExampleApp'));

  // instantiate service
  var dropLowestGrade;
  beforeEach(inject(function(_dropLowestGrade_) {
    dropLowestGrade = _dropLowestGrade_;
  }));

  it('calculates the average grade from an array of grades', function () {
    expect(dropLowestGrade.grade([1,3,4,5])).toBe(4);
  });

});
