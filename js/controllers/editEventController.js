/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var editEventController = function($scope, $filter, valueFactory, eventDataFactory){
		valueFactory.setTitle('New Event');
		
		$scope.event = {};
		
		$scope.saveEvent = function(){
			if($scope.newEventForm.$valid) {
				eventDataFactory.postEvent($scope.event);
			}
		};
	};
	
	angular.module('eventsApp').controller('editEventController', editEventController);
	editEventController.$inject = ['$scope', '$filter', 'valueFactory', 'eventDataFactory'];
	
})();