(function(){
	
	var testDirectivesController = function($scope, valueFactory){
		
		valueFactory.setTitle('Test Directives');
		
		$scope.name = 'Henrik';
		$scope.lastName = 'Mathiesen';
		
		//console.log($scope);
		// sampleData property is created when it is truthy
		$scope.onKeyUp = function(){
			//console.log($scope);
		};
		
	};
	
	angular.module('eventsApp').controller('testDirectivesController', testDirectivesController);
	testDirectivesController.$inject = ['$scope', 'valueFactory'];
	
})();