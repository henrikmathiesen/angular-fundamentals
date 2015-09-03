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
	
	
	var testThingsController = function($scope, $cacheFactory, $compile, $parse, $locale, $timeout, valueFactory){
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
		
		var fn = $parse('1 + 1');
		console.log(fn());
		
		// Can give $parse different contexts
		var getter = $parse('game.name');
		var context01 = { game: { name: 'Resident Evil 1' } };
		var context02 = { game: { name: 'Resident Evil 4' } };
		console.log(getter(context01));
		console.log(getter(context02));
		
		// Can also change value of a property in a context
		getter.assign(context02, 'Resident Evil 2');
		console.log(context02.game.name);
		
		
		// Testing Angulars $locale (need to referense its scripts, but does not need module dependencie [])
		// It also seems to be enough to just referense the locale_sv-se script to get the swedish words
		// for this semi custom filter: {{ myDate | date: 'fullDate' }} 
		$scope.myDate = Date.now();
		$scope.myDateFormat = $locale.DATETIME_FORMATS.fullDate;		// This does not seem to be nessecary
		
		// Testing Currency
		// This will display the currency symbol matching the locale file
		// {{ ammount | currency }}
		// To always display a specific currency symbol no mather locale file, use this filter
		// {{ ammount | currency: 'kr' }}
		$scope.ammount = 100;
		
		
		// Testing Angulars $timeout (and compare to vanilla) (storing their promise in a var, so we can cancel them)
		
		var vanillaStPromise = setTimeout(function(){ $scope.vanillaTimeoutName = 'John' }, 6000);		// This actually works ...
		var angStPromise = $timeout(function(){ $scope.angTimeoutName = 'Jane' }, 6000);				// Ofcourse this does too
		
		$scope.cancelvanillaTimeout = function(){ clearTimeout(vanillaStPromise); };					// Both of these works as well
		$scope.cancelangTimeout = function(){ $timeout.cancel(angStPromise) };							// But, do it The Angular Way
		
		
		// Testing Angulars $exceptionHandler
		// Dont know ...
		//throw { message: 'My Error Message' };
		//$exceptionHandler
		// https://docs.angularjs.org/api/ng/service/$exceptionHandler
	};
	
	
	
	angular.module('eventsApp').controller('testThingsController', testThingsController);
	testThingsController.$inject = ['$scope', '$cacheFactory', '$compile', '$parse', '$locale', '$timeout', 'valueFactory'];
	
})();