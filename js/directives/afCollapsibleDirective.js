(function () {

	var afCollapsibleDirective = function () {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				title: '@'
			},
			template: '<div><h4 ng-click="toggleVisibility()">{{ title }}</h4><div ng-transclude ng-show="isVisible"></div></div>',
			transclude: true,
			controller: ['$scope', function($scope){
				$scope.isVisible = true;
				$scope.toggleVisibility = function(){
					$scope.isVisible = !$scope.isVisible;
				};
			}]
		}
	};

	angular.module('eventsApp').directive('afCollapsible', afCollapsibleDirective);

})();