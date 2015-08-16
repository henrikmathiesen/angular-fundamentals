/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function(){
	
	var eventController = function($scope, $sce, $filter, valueFactory){
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
					name: 'Scope for fun and profit',
					creatorName: 'John Doe',
					duration: 1,
					level: 'Introductory',
					abstract: 'This session will take a closer look at scopes.',
					upVoteCount: 3,
					id:0
				},
				{
					name: 'Directive Masterclass',
					creatorName: 'Bob Smith',
					duration: 2,
					level: 'Advanced',
					abstract: 'In this session you will learn the ins and outs of directives.',
					upVoteCount: 0,
					id:1
				},
				{
					name: 'Well behaved Controllers Advanced',
					creatorName: 'Jane Doe',
					duration: 4,
					level: 'Intermediate',
					abstract: 'Learn how to craft and use controllers.',
					upVoteCount: 0,
					id:2
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
		$scope.filterByLevel = '';
		
		var testStringToFilter = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id enim convallis, pharetra est vitae, malesuada massa. Curabitur suscipit, leo ac volutpat ornare, enim nunc pulvinar turpis, ultricies elementum sapien eros et dolor. Etiam quis arcu nec justo aliquet finibus. Sed quis orci sit amet sem posuere';
		console.log($filter('truncateFilter')(testStringToFilter, 50));
	};
	
	angular.module('eventsApp').controller('eventController', eventController);
	eventController.$inject = ['$scope', '$sce', '$filter', 'valueFactory'];
	
})();