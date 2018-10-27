let myApp = angular.module('myApp', ['ngRoute']);


/// Routes ///
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: 'home'
        })
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController as vm',
        })
        .otherwise({
            templateUrl: '/views/templates/home.html'
        });
}]);