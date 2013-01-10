'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('diExampleApp'));

  var MainCtrl,
    scope,
    grades,
    average;

  // Initialize the controller and a mock scope
  // _ notation leverages the injector lookup for the module for the beforEach
  beforeEach(inject(function($controller, _localJson_, _average_, _parseCom_, _dropLowestGrade_) {
    scope = {};

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      parseCom: _localJson_,
      dropLowestGrade: _average_
    });
  }));

  it('should set a list of students', function() {
    expect(scope.students.length).toBe(3);
  });

  it ('should calculate the average per subject', function() {
    var mock = {'test':[1,2,2,2]};
    scope.reportCard = {};
    scope.gradePerSubject(mock);
    expect(scope.reportCard).toEqual({test: 1.75});
  });

  it ("should build a report card", function() {
    // scope.student = 'Thomas'
    scope.buildReportCard();
    expect(scope.reportCard).toEqual({});
  });
});
