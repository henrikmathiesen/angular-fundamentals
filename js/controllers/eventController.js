/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var eventController = function($scope, valueFactory){
		$scope.valueFactory = valueFactory;

		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2013',
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				province: 'CA'
			}
		};
	};
	
	angular.module('eventsApp').controller('eventController', eventController);
	eventController.$inject = ['$scope', 'valueFactory'];
	
})();