/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var editEventController = function($scope, $filter, $location, valueFactory, eventDataFactory){
		valueFactory.setTitle('New Event');
		
		$scope.event = {};
		
		$scope.saveEvent = function(){
			if($scope.newEventForm.$valid) {
				eventDataFactory.postEvent($scope.event)
								.then(function(){
									$location.path('/');
								}, function(){
									console.log('Error Saving Event');
								});
			}
		};
	};
	
	angular.module('eventsApp').controller('editEventController', editEventController);
	editEventController.$inject = ['$scope', '$filter', '$location', 'valueFactory', 'eventDataFactory'];
	
})();