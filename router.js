(function(root) {

    // переключение вкладок с частями схемы
    var SchemaRouter = Backbone.Router.extend({

      routes: {
        ':tab': 'toogle',
      },

      toogle: function(tab) {
        if (this.$tab) this.$tab.css('z-index', 10);
        (this.$tab = Backbone.$('#' + tab)).css('z-index', 11);
      }
  
    });

    var schemaRouter = new SchemaRouter;

    Backbone.history.start();
	
	root.schemaRouter = schemaRouter;
	
})(window);	
