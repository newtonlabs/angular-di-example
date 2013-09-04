'use strict';

diExampleApp.factory('amxScore', function() {

  return {
    grade: function(grades) {
      return _.max(grades);
    }
  };
});
