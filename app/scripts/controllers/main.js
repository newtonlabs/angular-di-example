'use strict';

diExampleApp.controller('MainCtrl', ['$scope', 'amxScore', 'localJson',  function($scope, calculatorService, studentInfoService) {
  // Initialize the controller
  // Call the Grade service and pass functions based on success and failure
  studentInfoService.students(function(students) {
    // On Success add the students to the students scope
    $scope.students = students;
  },
  function(students) {
    // If error then make the students scope an empty array
    $scope.students = [];
  });

  // Public available method that computes the grades based on a subjects object
  $scope.gradePerSubject = function(subjects) {
    _.each(subjects, function(grades, subject) {
      $scope.reportCard[subject] = calculatorService.grade(grades);
    });
  };

  // Public method that builds the report card based on the studentInfoService
  $scope.buildReportCard = function() {
    $scope.reportCard = {};

    // Call the service to get the subjects for the student
    studentInfoService.subjects($scope.student, function(subjects) {
      // On Success compute the grades per subject for the selected student
      $scope.gradePerSubject(subjects);
    },
    function(subjects) {
      // On Failure create a blank report card
      $scope.reportCard = {};
    });
  };
}]);
