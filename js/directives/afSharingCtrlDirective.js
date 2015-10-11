/// <reference path="../../typings/angularjs/angular.d.ts"/>


/*
	Order of execution in a directive
	- controller
	- compile
	- link
	- (template), not a function really


*/

(function(){
	
	var afSharingCtrlDirective = function(){
		return {
			priority: -1,						// 1 = highest prio (we set this to negative, else terminal wont work)
			restrict: 'E',
			//transclude: true,					// - If a directive on a nested element requires this directives controller, this property must be true
			replace: true,						// - Also, since replace is true, we need sourunding divs in template <div>... <div ng-transclude></div></div>
			template: '<button ng-click="sayHello()">Say Hello!</button>',
			controller: function($scope){
				var greetings = ['Hello'];
				
				$scope.sayHello = function(){
					console.log(greetings.join());
				};
				
				this.addGreeting = function(greeting){
					greetings.push(greeting);
				};
			}
		}
	};
	
	
	angular.module('eventsApp').directive('afSharingCtrl', afSharingCtrlDirective);
	
})();


(function(){
	
	var afSharingCtrlTooDirective = function(){
		return {
			restrict: 'A',
			priority: -3,						// 3 = lowest prio (we set this to negative, else terminal wont work)
			require: 'afSharingCtrl',			// Require a directive, on same element, named 'afSharingCtrl' that has a controller
												// That controller is passed in as a parameter to link function
												// -- If this directive is a child element of an element with a directive named 'afSharingCtrl'
												//		* We have to use this syntax: require: '^afSharingCtrl'
												//		* Also the parent directive 'afSharingCtrl' has to have transclude: true 
			link: function(scope, element, attributes, controller){
				console.log(scope);
				controller.addGreeting("Hei!");
			}
		}
	};
	
	
	angular.module('eventsApp').directive('afSharingCtrlToo', afSharingCtrlTooDirective);
	
})();


(function(){
	
	var afSharingCtrlAlsoDirective = function(){
		return {
			restrict: 'A',
			priority: -2,						// 2 = middle prio (we set this to negative, else terminal wont work)
			terminal: true,						// Dont execute directives with lower prio, on the same element
			require: 'afSharingCtrl',
			link: function(scope, element, attributes, controller){
				console.log(scope);
				controller.addGreeting("Ho ho!");
			}
		}
	};
	
	
	angular.module('eventsApp').directive('afSharingCtrlAlso', afSharingCtrlAlsoDirective);
	
})();