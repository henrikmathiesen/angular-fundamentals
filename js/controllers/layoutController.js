/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var layoutController = function($scope, valueFactory){
		$scope.valueFactory = valueFactory;
	};
	
	angular.module('eventsApp').controller('layoutController', layoutController);
	layoutController.$inject = ['$scope', 'valueFactory'];
	
})();