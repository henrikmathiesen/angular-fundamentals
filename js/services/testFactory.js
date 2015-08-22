angular.module('eventsApp').factory('testFactory', function(){
	
	// We can return this simple form, from a factory
	// Consumed like this testFactory();
	// return function(){
	// 	return 'This is a test';
	// };
	
	// We can also return an object with properties pointing to functions
	// Consumed like this testFactory.someWords();
	return {
		someWords: function(){
			return 'This is a test';
		}
	}
	
});