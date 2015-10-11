/* 

	Compiling clones on the fly, with the $compile service, is performance expensive
	We rather want to stamp out clones and use those clones
	In a compile function, scope is not avaliable
	
	-- I cant get it to work, sorry
		- compile should make the ng-bind stick in the repeated elements, but it does not
		
	-- With the old $compile service it does work, as usual

*/



(function () {

	var afRepeatxDirective = function ($compile) {



		return {
			// This binding to the 'name' property on the shared scope, wont work
			// link:function(scope, element, attributes){
			// 	element.after('<div>{{ name }}</div>');
			// }
			
			// compile: function (element, attributes) {
			// 	element.after('<div>{{ name }}</div>');
			// }
			
			// compile: function (element, attributes) {
			// 	element.after('<div ng-bind="name"></div>');
			// }
				
// 			compile: function (element, attributes) {
// 						
// 				// Angular has already added the directive template, but has not performed any transclusion or setup the data binding
// 				// http://odetocode.com/blogs/scott/archive/2014/05/28/compile-pre-and-post-linking-in-angularjs.aspx
// 						
// 				var nrOfRepeats = attributes.afRepeatx;
// 				nrOfRepeats -= 1; // Repeat five times included itself (that are already in DOM)
// 								
// 				for (var index = 0; index < nrOfRepeats; index++) {
// 					element.after(element.clone().attr('af-repeatx', 0));
// 				}
// 
// 			}
			
			link: function(scope, element, attributes){
				var nrOfRepeats = attributes.afRepeatx;
				nrOfRepeats -= 1;
				
				for (var index = 0; index < nrOfRepeats; index++) {
					var clone = element.clone().attr('af-repeatx', 0);
					clone = $compile(clone)(scope); 
					
					element.after(clone);
				}
			}
			
			
		}
	};

	angular.module('eventsApp').directive('afRepeatx', afRepeatxDirective);
	afRepeatxDirective.$inject = ['$compile'];

})();