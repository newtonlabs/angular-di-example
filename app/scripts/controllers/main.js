'use strict';

diApp.controller('MainCtrl', function($scope) {
  // GradeService(studentId).getGrades()
  // CalculatorService(grades) with different calculator
  // Drop down with different students



  $scope.student = 'Thomas'

  // Refactor to DI this
  var studentGrades = {
    'Social Studies': [78, 79, 80, 99],
    'Science': [100, 95, 93, 99],
    'Computer Science': [100,100,100,100]
  };

  $scope.reportCard = {};

  _.each(studentGrades, function(subjectGrades, subject) {
    $scope.reportCard[subject] = _.reduce(subjectGrades, function(memo, grade) {return memo + grade}, 0 ) / subjectGrades.length;
  })

});
