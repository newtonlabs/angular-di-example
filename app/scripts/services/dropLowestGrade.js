'use strict';

diExampleApp.factory('dropLowestGrade', function() {

  return {
    grade: function(grades) {
      // Sort numerically
      grades.sort(function(a,b){return a-b});

      // Drop lowest grade
      grades.splice(0,1);

      // Calculate the average
      return _.reduce(grades, function(memo, grade) {return memo + grade}, 0 ) / grades.length;
    }
  };
});
