/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var editEventController = function($scope, valueFactory){
		valueFactory.setTitle('New Event');
		
		$scope.saveEvent = function(){
			console.log($scope);
			if($scope.newEventForm.$valid) {
				console.log("SAVING EVENT");
			}
		};
	};
	
	angular.module('eventsApp').controller('editEventController', editEventController);
	editEventController.$inject = ['$scope', 'valueFactory'];
	
})();