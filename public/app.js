//Define an angular module for our app
(function () {
    'use strict';

var app = angular.module('app', ['ngRoute']);
//Define Routing for the application
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        }).
        when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        }).
        when('/register', {
            templateUrl: 'templates/registration.html',
            controller: 'registrationController'

        }).
        otherwise({
            redirectTo: '/index'
        });
    }
]);

})();