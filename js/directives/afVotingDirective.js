/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	// This is a losly coupled directive, it focuses on voting up/down and display votes, with a template
	// The directives lets the consumer parent controller send in parameters, from markup, that is used in the consumers scope
	// We have one use for this directive, so far, and that is to vote on event sessions
	// The directive, thanks to its lose coupeling, can be used to vote on other things as well
	//
	// Its scope is completely isolated from the parent controllers scope, except for the passed parameters
	// So 'scope' in a linking function will belong to this directive only
	
	
	/* 
		@ Attribute string binding , need to bind up-vote-count="{{  }}"
		= Two-way model binding
		& Callback method binding
	*/
	
	
	
	var afVotingDirective = function(){
		return {
			restrict: 'E',
			replace: true,
			scope: {
				upVote: '&',
				downVote: '&',
				upVoteCount: '@'
			},
			templateUrl: '/views/directives/afVotingDirective.html',
			link:function(scope, element, attributes){
				console.log(scope.upVoteCount);										// The evaluated value on this isolated scope
				console.log(attributes.upVoteCount);								// The DOM string 'session.upVoteCount'
				console.log(element);												// jQ (if jQuery is included) / jQLite wrapped element
				element.on('click', function(){
					console.log("CLICK ON VOTING WIDGET");
					attributes.$set('data-is-clicked-dirty', 'true');				// Can set DOM element attributes like this
					angular.element(this).attr('data-is-clicked-dirty-2', 'true');	// Or ofcourse like this
				});
				
				// $observe() is used to observe a DOM element that is changed by an angular binding
				// It has to be an attribute binding, '@', in the isolated scope
				attributes.$observe('upVoteCount', function(newValue, oldValue){
					if((newValue !== oldValue) && (newValue != 0)) {
						console.log("OBSERVED UPVOTE COUNT CHANGED");
					}
				});
			},
			
			// Only use controller in directive if scope is isolated, else messy
			// Can use an inline function or, as here, point to a controller defined elsewhere
			// I think I prefer them inline, to keep it short and consice
			controller: 'afVotingDirectiveController'
			
			// Consumer of directive can also pass in a controller, 'ctrl' maps to an attribute on DOM element (ctrl='afVotingDirectiveController')
			// controller: '@'
			// name: 'ctrl'
		}	
	};
	
	angular.module('eventsApp').directive('afVoting', afVotingDirective);
	
})();


(function(){
	
	var afVotingDirectiveController = function($scope){
		
		// $watch() is used to observe/watch a property on the $scope, it is "more powerful than $observe"
		$scope.$watch('upVoteCount', function (newValue, oldValue) {
			if ((newValue !== oldValue) && (newValue != 0))
				console.log("WATCHED UPVOTE COUNT CHANGED");
		});
		
	};
	
	
	angular.module('eventsApp').controller('afVotingDirectiveController', afVotingDirectiveController);
	afVotingDirectiveController.$inject = ['$scope'];
	
})();