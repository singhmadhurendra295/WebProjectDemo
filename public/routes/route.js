//Define an angular module for our app
var app = angular.module('mainApp', []);
//Define Routing for the application
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/Customers/AddNewCustomer', {
                templateUrl: 'Customers/AddNewCustomer.html',
                controller: 'AddNewCustomerController'
            }).
            when('/Customers/CustomerInquiry', {
                templateUrl: 'Customers/CustomerInquiry.html',
                controller: 'CustomerInquiryController'
            }).
            otherwise({
                redirectTo: '/Customers/AddNewCustomer'
            });
}]);