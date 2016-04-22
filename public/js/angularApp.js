var app = angular.module('profile', ['profileControllers','ngRoute','appRoutes']);


app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);

