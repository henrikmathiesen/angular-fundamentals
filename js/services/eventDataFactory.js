(function () {

	var eventDataFactory = function ($http, valueFactory) {

		var eventDataFactory = {};
		
		// This is one way of doing it, little messy sending message through the callback for updating GUI
		// eventDataFactory.event = function(callback){
		// 	$http.get(valueFactory.apiUrl + '/getevents')
		// 		.then(function(response){
		// 			callback(response.data.event);
		// 		}, function(){
		// 			callback('ERROR');
		// 		})
		// 		.finally(function(){
		// 			callback('ALWAYS');
		// 		});
		// };
		//
		// Can also use $resource, not async, but can call $promise.then(), is in another angular module (maybe look it up later)
		// http://stackoverflow.com/questions/13181406/angularjs-http-and-resource
		
		eventDataFactory.getEvents = function(){
			return $http.get(valueFactory.apiUrl + '/getevents');
		};
		
		eventDataFactory.getEvent = function(id){
			return $http.get(valueFactory.apiUrl + '/getevent?id=' + id);
		};
		
		eventDataFactory.postEvent = function(event){
			return $http.post(valueFactory.apiUrl + '/postevent', event);
		};

		return eventDataFactory;
	};


	angular.module('eventsApp').factory('eventDataFactory', eventDataFactory);
	eventDataFactory.$inject = ['$http', 'valueFactory'];

})();