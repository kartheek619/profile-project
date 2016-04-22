angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
    	.when('/', {
            templateUrl: 'views/index.html',
            controller: 'mainController'
        })
        .when('/app', {
            templateUrl: 'views/main.html',
            controller: 'mainController'
        });

    $locationProvider.html5Mode(true);

}]);

