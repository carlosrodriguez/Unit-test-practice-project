$(document).ready(function(){
		
	module("Do some sanity check", {
		setup: function(){
			this.search = doSearch;
		}
	});
	
	test("Sanity Check", function() {
		
		expect(6); // Set the number of tests

		search = this.search;

		// Are our methods still functions?
		equal(typeof(search.setService), "function", "setService is a function");

		search = this.search.exposeTest();

		equal(typeof(search.divideString), "function", "divideString is a function");
		equal(typeof(search.clearSpaces), "function", "clearSpaces is a function");
		equal(typeof(search.prepareData), "function", "prepareData is a function");
		equal(typeof(search.checkNumber), "function", "checkNumber is a function");
		equal(typeof(search.checkState), "function", "checkState is a function");
	});	

	module("Are we getting the right service?", {
		setup: function(){
			this.search = doSearch;
		}
	});	

	test("Test - doSearch function", function() {

		expect(7);

		search = this.search.setService;

		equal(search("33180"),"testingZip.aspx?zip=33180","We got a zip code for 33180");
		equal(search("33180 "),"testingZip.aspx?zip=33180","We got a zip code 33180 with trailing space");
		equal(search("FL"),"testingState.aspx?state=FL","We got a state by abbreviation FL"); 
		equal(search("Florida"),"testingState.aspx?state=Florida","We got a state with the spelled name Florida");
		equal(search("FL, 33180"),"testingZip.aspx?zip=33180","We got a zip code when passing both as FL, 33180");
		equal(search("FL 33180"),"testingZip.aspx?zip=33180","We got a zip code when passing both as FL 33180");
		equal(search("Miami"),"error","We got an error form invalid data");
	});
});