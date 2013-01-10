yeoman init angular:service calculator


// diExampleApp.controller('MainCtrl', ['$scope', 'calculator', function($scope, calc) {
diExampleApp.controller('MainCtrl', function($scope, calculator) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    calc.someMethod()
  ];
});
// }]);