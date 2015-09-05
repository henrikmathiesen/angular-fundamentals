/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/jquery/jquery.d.ts"/>


(function () {

	angular.module('eventsApp', ['ngRoute', 'ngSanitize', 'ngCookies', 'ui.bootstrap']);

})();





(function () {
	
	// config() runs before run() , also ngRoute needs script referense and module[]
	var config = function ($routeProvider) {

		$routeProvider
			.when('/allevents', {
				templateUrl: './views/allevents.html',
				controller: 'allEventsController'
			})
			.when('/event/:id', {
				templateUrl: './views/event.html',
				controller: 'eventController'
			})
			.when('/newevent', {
				templateUrl: './views/newevent.html',
				controller: 'editEventController'
			})
			.when('/editprofile', {
				templateUrl: './views/editProfile.html',
				controller: 'editProfileController'
			})
			.when('/testthings', {
				templateUrl: './views/testthings.html',
				controller: 'testThingsController'
			})
			.otherwise('/allevents');

	};

	angular.module('eventsApp').config(config);
	config.$inject = ['$routeProvider'];

})();