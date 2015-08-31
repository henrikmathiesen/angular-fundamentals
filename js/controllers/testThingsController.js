(function(){
	
	//jQuery (# Testing Array Filter)
	// ==============================================================================
	var names = [
		'Karl',
		'Henrik',
		'Mathiesen'
	];
	
	var loopOutMarkUp = function(filteredName){
		var markup = '';
		
		if(!filteredName) {
			for (var index = 0; index < names.length; index++) {
				markup += '<li>' + names[index] + '</li>';
			}
		}
		else {
			markup = '<li>' + filteredName + '</li>';
		}
		
		$('ul[data-names]').html(markup);
	};
	
	loopOutMarkUp();
	
	$('input[data-names-filter]').on('keyup', function(){
		if(!$(this).val()) {
			loopOutMarkUp();
			return;
		}
		
		var indexToFilter = names.indexOf($(this).val());
		if(indexToFilter >= 0) {
			//var filteredName = names.splice(indexToFilter, 1);
			var filteredName = names[indexToFilter];
			loopOutMarkUp(filteredName);
		}
	});
	// ==============================================================================
	
	
	var testThingsController = function($scope, $cacheFactory, $compile, $parse, valueFactory){
		valueFactory.setTitle('Test Things');
		
		
		// Testing Angulars $cacheFactory
		
		var myCache = $cacheFactory('myCache', { capacity:3 });
		
		$scope.addToCache = function(key, value){
			myCache.put(key, value);
		};
		
		$scope.readFromCache = function(key){
			return myCache.get(key);
		};
		
		$scope.getCacheStats = function(){
			return myCache.info();
		};
		
		
		// # Testing Array Filter
		
		$scope.names = [
			'Karl',
			'Henrik',
			'Mathiesen'
		];
		
		
		// Testing Angulars $compile - when we want to insert markup with bindings into DOM
		
		$scope.cname = "Bumle";
		$scope.cHello = function(){ console.log("Hello"); };
		
		// Here we do not compile the markup, so bindings wont work
		var cmarkup = '<span ng-click="cHello()"> {{ cname }} </span>';
		angular.element('div[data-not-compiled]').html(cmarkup);
		
		// If we compile the markup, the bindings will work
		cmarkup = $compile(cmarkup)($scope);
		angular.element('div[data-compiled]').html(cmarkup);
		
		
		// Testing Angulars $parse
		var fn = 'console.log(1 + 1)';
	};
	
	
	
	angular.module('eventsApp').controller('testThingsController', testThingsController);
	testThingsController.$inject = ['$scope', '$cacheFactory', '$compile', '$parse', 'valueFactory'];
	
})();