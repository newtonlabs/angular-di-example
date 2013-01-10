'use strict';

diExampleApp.factory('average', function() {

  return {
    grade: function(grades) {
      // Calculate the average with a memo on reduce
      return _.reduce(grades, function(memo, grade) {return memo + grade}, 0 ) / grades.length;
    }
  };
});
