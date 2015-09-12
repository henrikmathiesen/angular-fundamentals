/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function () {

	var layoutController = function ($scope, $location, valueFactory) {
		$scope.valueFactory = valueFactory;
		$scope.location = $location;

		$scope.navigateToInlineTemplate = function () {
			// This will replace the view but not add it to browser history
			$location.replace();
			$location.url('/inlinetemplate');
		};
	};

	angular.module('eventsApp').controller('layoutController', layoutController);
	layoutController.$inject = ['$scope', '$location', 'valueFactory'];

})();