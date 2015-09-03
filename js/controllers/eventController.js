/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var eventController = function($scope, $sce, $filter, $anchorScroll, $location, valueFactory, eventDataFactory, testFactory){
		$scope.event = {};
		$scope.snippet = $sce.trustAsHtml("<span style='color:green;'>See info</span>");

		eventDataFactory.getEvent(0)
						.then(function(response){
							$scope.event = response.data;
						}, function(){
							console.log("ERROR GETTING EVENT");
						})
						.finally(function(){
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
		
		// DEBUG
		$scope.listAllEvents = function(){
			eventDataFactory.getEvents()
							.then(function(response){
								console.log(response.data);
							});
		};
		
		
		// Using an Angular filter from code
		var names = ['Bertil', 'Adam', 'David', 'Ceasar'];
		var orderedNames = $filter('orderBy')(names, '-');
		console.log(orderedNames);
		
	};
	
	angular.module('eventsApp').controller('eventController', eventController);
	eventController.$inject = ['$scope', '$sce', '$filter', '$anchorScroll', '$location', 'valueFactory', 'eventDataFactory', 'testFactory'];
	
})();