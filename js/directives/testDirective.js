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
			
			//scope: {},
			
			replace: true, // Default false, resulting in <testing-some-fancy><div><input>, true removes <testing-some-fancy>, if true must have a surrounding tag in template
			
			template: '<div><input type="text" ng-model="sampleData" ng-keyup="onKeyUp()" /> <span ng-bind="sampleData"></span></div>',
			
			link: function(scope, element, attrs, controller){
				scope.name = "Kalle";
				scope.directiveProp = 'Yeah!';
			}
			
			// controller: ['$scope',function($scope) {
			// 	console.log($scope);
			// }]
		}
	};
	
	// We dont name the directive 'testingSomeFancyDirective', just 'testingSomeFancy', because in markup we KNOW it is a directive
	angular.module('eventsApp').directive('testingSomeFancy', testDirective);
	testDirective.$inject = ['$compile'];
	
})();