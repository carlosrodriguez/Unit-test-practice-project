$(document).ready(function(){
		
	module("Compare script",{
		setup: function(){
			console.log(docompare.getcount);
		}
	});
	
	test("Get Count", function() {
		
		expect(4);

		// Set all checkboxes to false
		$(".compare-check").attr("checked", false);
		 
		equal(typeof(docompare.getcount), "function", "getcount is a function");
		equal(docompare.getcount($(".compare-check:checked")), 0, "Got 0 as result when no item selected");
		
		$("#product1").attr("checked", true);
		$("#product2").attr("checked", true);
		$("#product3").attr("checked", true);

		equal(docompare.getcount($(".compare-check:checked")), 3, "got three after three items are selected");
		
		$("#product2").attr("checked", false);
		equal(docompare.getcount($(".compare-check:checked")), 2, "got two after one item is deselected");
		
	});	
	
	test("Enough products for compare", function() {
		
		expect(5);
		
		// Set all checkboxes to false
		$(".compare-check").attr("checked", false);
		 
		equal(docompare.getcount($(".compare-check:checked")), 0, "Got 0 as result when no item selected");

		equal(typeof(docompare.checkcompare), "function", "checkcompare is a function");
		
		$("#product1").attr("checked", true);
		$("#product2").attr("checked", true);
		$("#product3").attr("checked", true);
		ok(docompare.checkcompare(), "Got true since there are three elements");
		
		$("#product3").attr("checked", false);
		ok(docompare.checkcompare(), "Got true since there are two elements");
		
		$("#product2").attr("checked", false);
		ok(!docompare.checkcompare(), "Got false since there is only one element");
		
	});	
	
	test("Set Storage", function() {
		
		expect(2);
		
		equal(typeof(docompare.setstorage), "function", "setStorage is a function");
		
		var $input = docompare.setstorage();
		
		equal($input.attr('id'), "hdItemIDs", "Got the input with the right id");
	});	
	
	test("Store value", function() {
		
		expect(3);
		
		// Set all checkboxes to false
		$(".compare-check").attr("checked", false);
		
		equal(typeof(docompare.storevalue), "function", "storeValue is a function");
		
		equal(docompare.storevalue("product1"), 'product1', "Value is empty, set checkone and got checkone");
		equal(docompare.storevalue("product2"), 'product1,product2', "Value is not empty, got intial value + new value");
	});	
	
	test("Remove value", function() {
		
		//expect(3);
		
		equal(typeof(docompare.removevalue), "function", "removeValue is a function");
		
		var content = docompare.setstorage();
		
		if(content.val() == ""){
			// Set some values if empty to be able to test the remove function correclty.
			docompare.storevalue("product1");
			docompare.storevalue("product2");
		}
		
		equal(content.val(), 'product1,product2', "Value is still the same as the last call");
		docompare.removevalue();
		equal(content.val(), '', "Removed all values");
	});	
	
});