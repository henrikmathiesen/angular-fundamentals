/* 

	Compiling clones on the fly, with the $compile service, is performance expensive
	We rather want to stamp out clones and use
	In a compile function scope is not avaliable

*/



(function () {

	var afRepeatxDirective = function () {



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
			
			
		
		

				
			compile: function (element, attributes) {
						
				// Angular has already added the directive template, but has not performed any transclusion or setup the data binding
				// http://odetocode.com/blogs/scott/archive/2014/05/28/compile-pre-and-post-linking-in-angularjs.aspx
						
				var nrOfRepeats = attributes.afRepeatx;
				nrOfRepeats -= 1; // Repeat five times included itself (that are already in DOM)
								
				for (var index = 0; index < nrOfRepeats; index++) {
					console.log("X");
					element.after(element.clone().attr('af-repeatx', 0));
				}

			}
		}
	};

	angular.module('eventsApp').directive('afRepeatx', afRepeatxDirective);

})();