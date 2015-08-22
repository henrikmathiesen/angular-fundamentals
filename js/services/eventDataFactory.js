(function () {

	var eventDataFactory = function () {

		var eventDataFactory = {};

		eventDataFactory.event =
		{
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
					id: 0
				},
				{
					name: 'Directive Masterclass',
					creatorName: 'Bob Smith',
					duration: 2,
					level: 'Advanced',
					abstract: 'In this session you will learn the ins and outs of directives.',
					upVoteCount: 0,
					id: 1
				},
				{
					name: 'Well behaved Controllers Advanced',
					creatorName: 'Jane Doe',
					duration: 4,
					level: 'Intermediate',
					abstract: 'Learn how to craft and use controllers.',
					upVoteCount: 0,
					id: 2
				}
			]
		};


		return eventDataFactory;
	};


	angular.module('eventsApp').factory('eventDataFactory', eventDataFactory);

})();