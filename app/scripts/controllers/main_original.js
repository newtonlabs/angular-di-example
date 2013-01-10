'use strict';

diExampleApp.controller('MainCtrl', function($scope) {

  Parse.initialize("HA9buROzq6rOHYKdm3Rjzw5J6sA4modXdpoYxgeX",
                   "BnJxH7ipxTdgtlDFYjOE4k3ItJuCw3QhIc4UDkut");

  var Student = Parse.Object.extend("Student");
  var query   = new Parse.Query(Student);

  query.exists("name");
  query.find({
    success: function(results) {
      // on success take the list of objects and place them in the students scope
      var students = _.map(results, function(student) { return student.get('name'); });
      $scope.students = students;
      $scope.$apply();
    },
    error: function(error) {
      $scope.students = [];
      $scope.$apply();
      console.log('Could not get students' + error.message);
    }
  });


  // Public available method that computes the grades based on a subjects object
  $scope.gradePerSubject = function(subjects) {
    // Loop through each subject and calculate the average grade by first dropping the loweset score
    _.each(subjects, function(grades, subject) {
      grades.sort(function(a,b){return a-b});
      grades.splice(0,1);
      var grade = _.reduce(grades, function(memo, grade) {return memo + grade}, 0 ) / grades.length;

      // store the grade in the report object in a subject hash
      $scope.reportCard[subject] = grade;
    });
  };

  // Public method that builds the report card based on the studentInfoService
  $scope.buildReportCard = function() {
    $scope.reportCard = {};
    var grades = {}
    var query  = new Parse.Query(Student);

    query.equalTo("name", $scope.student);
    query.first({
      // On success build a report card hash
      success: function(student) {
        $scope.gradePerSubject(student.get('grades'));
        $scope.$apply();
      },
      error: function(error) {
        console.log('Could not get grades' + error.message);
      }
    });
  };
});
