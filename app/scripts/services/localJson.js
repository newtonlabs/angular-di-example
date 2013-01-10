'use strict';

diExampleApp.factory('localJson', function() {

  return {
    students: function(success, error) {
      var students = _.keys(diExampleApp.students);
      success(students);
    },

    subjects: function(student, success, error) {
      var subjects = diExampleApp.students[student];
      success(subjects);
    }
  };
});
