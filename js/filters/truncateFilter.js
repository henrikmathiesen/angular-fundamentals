(function () {

	var truncateFilter = function () {
		return function (input, cap) {
			if (typeof input != 'string') {
				return 'ERROR, input was not a string'
			}
			
			cap = cap || 5;

			if (input.length > cap) {
				input = input.substring(0, (cap - 1));
				input += '...';
			}
			
			return input;
		};
	};

	angular.module('eventsApp').filter('truncateFilter', truncateFilter);

})();