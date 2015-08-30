/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var eventController = function($scope, $sce, $filter, valueFactory, eventDataFactory, testFactory){
		$scope.valueFactory = valueFactory;
		
		$scope.snippet = $sce.trustAsHtml("<span style='color:green;'>See info</span>");

		eventDataFactory.getEvent(4)
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
		
		$scope.sortOrder = 'name'; // Can set to '-name' to invert order
		$scope.filterByLevel = '';
		
		var testStringToFilter = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id enim convallis, pharetra est vitae, malesuada massa. Curabitur suscipit, leo ac volutpat ornare, enim nunc pulvinar turpis, ultricies elementum sapien eros et dolor. Etiam quis arcu nec justo aliquet finibus. Sed quis orci sit amet sem posuere';
		console.log($filter('truncateFilter')(testStringToFilter, 50));
		
		$scope.listAllEvents = function(){
			eventDataFactory.getEvents()
							.then(function(response){
								console.log(response.data);
							});
		};
	};
	
	angular.module('eventsApp').controller('eventController', eventController);
	eventController.$inject = ['$scope', '$sce', '$filter', 'valueFactory', 'eventDataFactory', 'testFactory'];
	
})();