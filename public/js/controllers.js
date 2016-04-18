var profileControllers = angular.module('profileControllers',[]);

profileControllers.controller('headerController',
  
    function($scope,$http){
	
		$scope.name="kartheek";
		
		
		$http({
			method:'GET',
			url:'http://localhost:8000/personal/Maremalla'
		}).then(function(response){
			$scope.lname=response.data.lname;
			$scope.fname=response.data.fname;
			$scope.title=response.data.title;
			$scope.phone=response.data.phone;
			$scope.email=response.data.email;
			$scope.picture=response.data.picture;
		});

});