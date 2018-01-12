var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'views/home.html'
	})
	.when('/books', {
		controller: 'BooksController',
		templateUrl: 'views/home.html'
	})
	.when('/books/details/:id', {
		controller: 'BooksController',
		templateUrl: 'views/details.html'
	})
	.when('/books/add', {
		controller: 'BooksController',
		templateUrl: 'views/additem.html'
	})
	.when('/books/edit', {
		controller: 'BooksController',
		templateUrl: 'views/edit.html'
	})
	.otherwise({
		redirectTo: '/'
	})

});