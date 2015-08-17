(function () {

	var valueFactory = function () {

		var _title = 'Angular Fundamentals - The Events App';

		var valueFactory = {};
		
		valueFactory.getTitle = function(){
			return _title;
		};
		
		valueFactory.setTitle = function(title){
			_title = title + ' - The Events App';
		};
		
		
		return valueFactory;
	};


	angular.module('eventsApp').factory('valueFactory', valueFactory);

})();