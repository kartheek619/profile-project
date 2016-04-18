var app = angular.module('profile', ['profileControllers']);


app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);

