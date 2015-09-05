(function(){
	
	var allEventsController = function($scope, eventDataFactory){
		eventDataFactory.getEvents()
						.then(function(response){
							$scope.events = response.data;
						}, function(){
							console.log("Error getting all events");
						});
						
						
		$scope.fakes = ['Lorem', 'Ipsum', 'Dolores'];
		$scope.removeFake = function(fake){
			var indexToRemove = $scope.fakes.indexOf(fake);
			$scope.fakes.splice(indexToRemove, 1);
		};
	};
	
	
	angular.module('eventsApp').controller('allEventsController', allEventsController);
	allEventsController.$inject = ['$scope', 'eventDataFactory'];
	
})();