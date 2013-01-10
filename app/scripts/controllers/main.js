'use strict';

diExampleApp.controller('MainCtrl', ['$scope', 'dropLowestGrade', 'parseCom',  function($scope, calculatorService, gradeService) {

  gradeService.students(function(students) {
    $scope.students = students;
  },
  function(students) {
    $scope.students = [];
  });

  $scope.gradePerSubject = function(subjects) {
    _.each(subjects, function(grades, subject) {
      $scope.reportCard[subject] = calculatorService.grade(grades);
    });
  };

  $scope.buildReportCard = function() {
    $scope.reportCard = {};

    gradeService.subjects($scope.student, function(subjects) {
      $scope.gradePerSubject(subjects);
    },
    function(subjects) {
      $scope.reportCard = {};
    });
  };
}]);
