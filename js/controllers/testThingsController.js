(function(){
	
	var testThingsController = function($scope, valueFactory){
		valueFactory.setTitle('Test Things');
	};
	
	angular.module('eventsApp').controller('testThingsController', testThingsController);
	testThingsController.$inject = ['$scope', 'valueFactory']
	
})();