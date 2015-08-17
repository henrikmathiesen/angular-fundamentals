/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var editEventController = function($scope, valueFactory){
		valueFactory.setTitle('New Event');
	};
	
	angular.module('eventsApp').controller('editEventController', editEventController);
	editEventController.$inject = ['$scope', 'valueFactory'];
	
})();