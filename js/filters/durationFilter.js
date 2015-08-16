(function () {

	var durationFilter = function () {
		return function (duration) {
			switch(duration) {
				case 1:
					duration = 'Half hour';
					break;
				case 2:
					duration = '1 hour';
					break;
				case 3:
					duration = 'Half day';
					break;
				case 4:
					duration = 'Full day';
					break;
				default:
					console.log('ERROR!');
					break;
			}
			
			return duration;
		};
	};

	angular.module('eventsApp').filter('durationFilter', durationFilter);

})();