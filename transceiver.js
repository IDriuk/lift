(function(root) {

	// приемо-передатчик для событий элементов
	var transceiver = _.extend({}, Backbone.Events, {
	  trans: function() {
	    this.trigger.apply(this, arguments);
	  }
	});
	
	root.transceiver = transceiver; 
	
})(window);
