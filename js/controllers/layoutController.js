/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var layoutController = function($scope, $location, valueFactory){
		$scope.valueFactory = valueFactory;
		$scope.location = $location;
	};
	
	angular.module('eventsApp').controller('layoutController', layoutController);
	layoutController.$inject = ['$scope', '$location', 'valueFactory'];
	
})();