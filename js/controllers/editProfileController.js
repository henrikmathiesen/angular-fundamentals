/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var editProfileController = function($scope, valueFactory){
		valueFactory.setTitle('Your Profile');
		$scope.user = {};
		
	};
	
	angular.module('eventsApp').controller('editProfileController', editProfileController);
	editProfileController.$inject = ['$scope', 'valueFactory'];
	
})();