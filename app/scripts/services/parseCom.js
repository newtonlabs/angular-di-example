"use strict";

diExampleApp.factory("parseCom", ['$rootScope', function($rootScope) {
  // Initialize Parse with your Parse application javascript keys
  Parse.initialize("HA9buROzq6rOHYKdm3Rjzw5J6sA4modXdpoYxgeX",
                   "BnJxH7ipxTdgtlDFYjOE4k3ItJuCw3QhIc4UDkut");

  var Student = Parse.Object.extend("Student");

  return {
    students: function(success, error) {
      var query = new Parse.Query(Student);

      query.exists("name");
      query.find({
        success: function(results) {
          var students = _.map(results, function(student) { return student.get('name'); });
          success(students);
          $rootScope.$apply();
        },
        error: function(error) {
          error();
          $rootScope.$apply();
          console.log('Could not get students' + error.message);
        }
      });
    },

    subjects: function(student, success, error) {
      var grades = {}
      var query = new Parse.Query(Student);

      query.equalTo("name", student);
      query.first({
        success: function(student) {
          success(student.get('grades'));
          $rootScope.$apply();
        },
        error: function(error) {
          error({});
          $rootScope.$apply();
          console.log('Could not get grades' + error.message);
        }
      });
    }
  };
}]);



/*
 * Seed Data
 */

  // var student  = new Student();
  // student.set('grades', {
  //   'Reading': [98,95,90,50,93],
  //   'Writing': [75, 88, 65, 90, 40],
  //   'Arithmetic': [100, 90, 97, 96]
  // });
  // student.set('name', 'Bhaven');
  // student.save(null, {success: function(){console.log('saved')}, error: function(){}});

  // student = new Student();
  // student.set('grades', {
  //   'Reading': [88,85,80,80,83],
  //   'Writing': [99, 100, 98, 0],
  //   'Arithmetic': [100, 100, 100, 75]
  // });
  // student.set('name', 'Laurent');
  // student.save(null, {success: function(){console.log('saved')}, error: function(){}});

  // student = new Student();
  // student.set('grades', {
  //   'Reading': [78,75,70,70,53],
  //   'Writing': [69, 55, 38, 90],
  //   'Arithmetic': [100, 100, 100, 100]
  // });
  // student.set('name', 'Bobby');
  // student.save(null, {success: function(){console.log('saved')}, error: function(){}});
