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
		
		eventDataFactory.event = function(){
			return $http.get(valueFactory.apiUrl + '/getevents');
		};

		return eventDataFactory;
	};


	angular.module('eventsApp').factory('eventDataFactory', eventDataFactory);
	eventDataFactory.$inject = ['$http', 'valueFactory'];

})();