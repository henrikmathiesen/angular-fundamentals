(function(){
	
	var allEventsController = function($scope, $route, valueFactory, events){
		
		valueFactory.setTitle('All Events');
		
		$scope.events = events;
		
						
		$scope.fakes = ['Lorem', 'Ipsum', 'Dolores'];
		$scope.removeFake = function(fake){
			var indexToRemove = $scope.fakes.indexOf(fake);
			$scope.fakes.splice(indexToRemove, 1);
		};
		
	};
	
	
	angular.module('eventsApp').controller('allEventsController', allEventsController);
	allEventsController.$inject = ['$scope', '$route', 'valueFactory', 'events'];
	
})();