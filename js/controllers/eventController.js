/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var eventController = function($scope, $sce, valueFactory){
		$scope.valueFactory = valueFactory;
		
		$scope.snippet = $sce.trustAsHtml("<span style='color:green;'>See info</span>");

		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2013',
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				province: 'CA'
			},
			image: 'https://angularjs.org/img/AngularJS-large.png',
			sessions: [
				{
					name: 'Directive Masterclass',
					creatorName: 'Bob Smith',
					duration: '1 hour',
					level: 'Advanced',
					abstract: 'In this session you will learn the ins and outs of directives.',
					upVoteCount: 0
				},
				{
					name: 'Scope for fun and profit',
					creatorName: 'John Doe',
					duration: '30 min',
					level: 'Introductory',
					abstract: 'This session will take a closer look at scopes.',
					upVoteCount: 0
				},
				{
					name: 'Well behaved Controllers',
					creatorName: 'Jane Doe',
					duration: '2 hour',
					level: 'Intermediate',
					abstract: 'Learn how to craft and use controllers.',
					upVoteCount: 0
				}
			]
		};
		
		$scope.upVoteSession = function(session){
			session.upVoteCount += 1;
		};
		
		$scope.downVoteSession = function(session){
			session.upVoteCount -= 1;
			if(session.upVoteCount < 0) {
				session.upVoteCount = 0;
			}
		};
		
		$scope.sortOrder = 'name'; // Can set to '-name' to invert order
	};
	
	angular.module('eventsApp').controller('eventController', eventController);
	eventController.$inject = ['$scope', '$sce', 'valueFactory'];
	
})();