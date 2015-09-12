(function(){
	
	var testDirectivesController = function($scope, valueFactory){
		
		valueFactory.setTitle('Test Directives');
		
		$scope.name = 'Henrik';
		$scope.lastName = 'Mathiesen';
		
	};
	
	angular.module('eventsApp').controller('testDirectivesController', testDirectivesController);
	testDirectivesController.$inject = ['$scope', 'valueFactory'];
	
})();