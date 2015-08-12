/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var helloWorldController = function($scope){
		$scope.message = 'Hello World!';
	};
	
	angular.module('angFun').controller('helloWorldController', helloWorldController);
	helloWorldController.$inject = ['$scope'];
	
})();