// Setup a namespace to use for all our classes, we just do this to avoid conflicts with other libraries
if (typeof tdd === "undefined") {
	tdd = {};
}

tdd.BananaPopulator = Class.extend({
	defaults: {
		ajax: $.ajax
	},
	
	init: function( params ) {
		$.extend( this, this.defaults, params);
		this.getTheBananas();
	},
	
	getTheBananas: function() {
		this.ajax({
			url: '/bananas',
			type: 'get',
			success: function( data ) {
				for (var i=0, banana; (banana = data[i]) != null; i++) {
					var option = $('<option value="' + banana.id + '">' + banana.name + '</option>');
					$('#banana-selector').append(option);
				}
			}
		});
	}
});