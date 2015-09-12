(function(){
	
	var testDirective = function($compile){
		return {
			
			// link: function(scope, element, attributes, controller){
			// 	var markup = '<input type="text" ng-model="sampleData" /> <span ng-bind="sampleData"></span>';
			// 	angular.element(element).html($compile(markup)(scope));
			// }
			// IF we only want to spit out compiled markup we can just use template or templateUrl:''
			
			//restrict: 'C', // A|E is default, need 'C' for css class
			//scope:false // default, directive and controller SHARES THE SAME SCOPE (get, set and bindings will reflect in each)
			
			replace: true, // Default false, resulting in <testing-some-fancy><div><input>, true removes <testing-some-fancy>, if true must have a surrounding tag in template
			
			template: '<div><input type="text" ng-model="sampleData" /> <span ng-bind="sampleData"></span></div>',
			
			
			link: function(scope, element, attrs){
				scope.name = "Kalle";
				scope.directiveProp = 'Yeah!';
			}
		}
	};
	
	angular.module('eventsApp').directive('testingSomeFancy', testDirective);
	testDirective.$inject = ['$compile'];
	
})();