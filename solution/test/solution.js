$(document).ready(function(){
		
	module("Do some sanity check", {
		setup: function(){
			this.search = doSearch;
		}
	});
	
	test("Sanity Check", function() {
		
		//expect(#); // Set the number of tests

		search = this.search;
		console.log(search);

		// Are your functions still functions?
		equal(typeof(search.init), "function", "init is a function");
		
	});		
	
});