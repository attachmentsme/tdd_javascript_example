module("Banana Populator");

test("On instantiation, populator should do a get request to /bananas", function() {
	expect(2);
	var fakeAjax = function( params ) {
		equal( params.url, '/bananas', 'Populator should be requesting from /bananas' );
		equal( params.type, 'get', 'Populator should be doing a get request' );
	}
	var populator = new tdd.BananaPopulator({
		ajax: fakeAjax
	});
});

test("After /bananas returns a json struct, banana-selector should be populated", function() {
	var fakeBananaJson = [{id:5, color:"yellow"},{id:2, color:"green"}]
	var fakeAjax = function( params ) {
		params.success( fakeBananaJson );
	}
	var populator = new tdd.BananaPopulator({
		ajax: fakeAjax
	});
	equal( $('#banana-selector option').length, 2, 'There should be 2 options on the banana selector' );
});