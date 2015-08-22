/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var editProfileController = function($scope){
		
		$scope.user = {};
		
	};
	
	angular.module('eventsApp').controller('editProfileController', editProfileController);
	editProfileController.$inject = ['$scope'];
	
})();