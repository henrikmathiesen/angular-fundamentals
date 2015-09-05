(function(){
	
	var allEventsController = function($scope, eventDataFactory){
		eventDataFactory.getEvents()
						.then(function(response){
							$scope.events = response.data;
						}, function(){
							console.log("Error getting all events");
						});
	};
	
	
	angular.module('eventsApp').controller('allEventsController', allEventsController);
	allEventsController.$inject = ['$scope', 'eventDataFactory'];
	
})();