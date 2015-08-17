/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var editEventController = function($scope, valueFactory){
		valueFactory.setTitle('New Event');
		
		$scope.saveEvent = function(event){
			console.log(event);
		};
	};
	
	angular.module('eventsApp').controller('editEventController', editEventController);
	editEventController.$inject = ['$scope', 'valueFactory'];
	
})();