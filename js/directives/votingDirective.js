(function(){
	
	// This is a losly coupled directive, it focuses on voting up/down and display votes, with a template
	// The directives lets the consumer parent controller send in parameters, from markup, that is used in the consumers scope
	// We have one use for this directive, so far, and that is to vote on event sessions
	// The directive, thanks to its lose coupeling, can be used to vote on other things as well
	//
	// Its scope is completely isolated from the parent controllers scope, except for the passed parameters
	// So 'scope' in a linking function will belong to this directive only
	
	
	var votingDirective = function(){
		return {
			scope: {
				upVote: '&',
				downVote: '&',
				upVoteCount: '='
			},
			templateUrl: '/views/directives/votingDirective.html'
		}	
	};
	
	angular.module('eventsApp').directive('afVoting', votingDirective);
	
})();



/* 
	@ Attribute string binding , need to bind up-vote-count="{{  }}"
	= Two-way model binding
	& Callback method binding
*/