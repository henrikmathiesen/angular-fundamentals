/// <reference path="../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../typings/jquery/jquery.d.ts"/>

// (function($){
// 	$.ajax({
// 		method: 'GET',
// 		url: 'http://localhost:1338/getevent?id=0'
// 	})
// 	.then(function(response){
// 		console.log(response);
// 	}, function(){
// 		console.log('error');
// 	})
// 	.always(function(){
// 		console.log('always!');
// 	});
// })(jQuery);



/*
	Interesting
	- jQuery Ajax API does not use last .then() as Always/Finally (logic does not go there on error)
	- jQuery Ajax API needs an .always()
	- Angular on the other hand uses last .then() as Always/Finally
	
	If we chose to not use the then() API here are the other states that matches
	-- Angular
		- success()
		- error()
		- finally()
	-- jQuery
		- done()
		- fail()
		- always()
*/



(function(){
	
	var eventController = function($scope, $sce, $filter, $anchorScroll, $location, $cookies, $routeParams, $compile, valueFactory, eventDataFactory){
		var eventToGet = $routeParams.id;
		
		valueFactory.setTitle('Event');
		
		$scope.event = {};
		$scope.snippet = $sce.trustAsHtml("<span style='color:green;'>See info</span>");						// To get bindings and directive to work, we need $compile
		
		var cSnippet = $compile('<span style="color:gold;" ng-click="sayHiThere()">Click me</span>')($scope);	// We cant bind to a compiled string
		angular.element('h5[data-snippet="cSnippet"]').html(cSnippet);											// So we use .html()
		
		$scope.sayHiThere = function(){
			console.log("Hi there!");
		};
		
		$scope.ajaxOk = false;
		$scope.ajaxDone = false;
		
		eventDataFactory.getEvent(eventToGet)
						.then(function(response){
							$scope.ajaxOk = true;
							$scope.event = response.data;
							console.log('data');
						}, function(){
							$scope.event = false;
							console.log("ERROR GETTING EVENT");
						})
						 .finally(function(){
							$scope.ajaxDone = true;
							console.log("ALWAYS");
						});
		
		$scope.upVoteSession = function(session){
			session.upVoteCount += 1;
		};
		
		$scope.downVoteSession = function(session){
			session.upVoteCount -= 1;
			if(session.upVoteCount < 0) {
				session.upVoteCount = 0;
			}
		};
		
		$scope.sortOrder = 'name'; 					// Can set to '-name' to invert order
		$scope.filterByLevel = '';
		
		$scope.scrollToSessions = function(){
			// Can set $location.hash('someIdNoHashSymbol'), then $anchorScroll() -- or give an id $anchorScroll('session1');
			var sessionToScrollTo =  ($location.hash()) ? ($location.hash()) : ('session1');
			$anchorScroll(sessionToScrollTo);
		};
		
		var testStringToFilter = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id enim convallis, pharetra est vitae, malesuada massa. Curabitur suscipit, leo ac volutpat ornare, enim nunc pulvinar turpis, ultricies elementum sapien eros et dolor. Etiam quis arcu nec justo aliquet finibus. Sed quis orci sit amet sem posuere';
		console.log($filter('truncateFilter')(testStringToFilter, 50));
		// truncateFilter(testStringToFilter, 50) , can do it like that, if included that as a service, but I think cant name it xxFilter, use $filter instead
		
		
		// Using an Angular filter from code
		var names = ['Bertil', 'Adam', 'David', 'Ceasar'];
		var orderedNames = $filter('orderBy')(names, '-');
		console.log(orderedNames);
		
		
		// Looking for a cookie, indicating user has visited Testing Things Page
		$scope.cookieValue = $cookies.get('name') || '';
		
		$scope.cookieValueDelete = function(){
			$cookies.remove('name');
			$scope.cookieValue = '';
		};
		
		// DEBUG
		$scope.listAllEvents = function(){
			eventDataFactory.getEvents()
							.then(function(response){
								console.log(response.data);
							});
		};
	};
	
	angular.module('eventsApp').controller('eventController', eventController);
	eventController.$inject = ['$scope', '$sce', '$filter', '$anchorScroll', '$location', '$cookies', '$routeParams', '$compile', 'valueFactory', 'eventDataFactory'];
	
})();