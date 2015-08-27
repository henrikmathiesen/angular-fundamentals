(function () {

	var valueFactory = function () {

		var _title = 'Angular Fundamentals - The Events App';
		var _APIURL = 'http://localhost:1338';

		var valueFactory = {};
		
		valueFactory.getTitle = function(){
			return _title;
		};
		
		valueFactory.setTitle = function(title){
			_title = title + ' - The Events App';
		};
		
		valueFactory.apiUrl = _APIURL;
		
		
		return valueFactory;
	};


	angular.module('eventsApp').factory('valueFactory', valueFactory);

})();