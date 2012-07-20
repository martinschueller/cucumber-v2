// Filename: views/stories/list
define(
		[ 'jquery', 'underscore', 'backbone',
		  
		  // Pull in the Collection module from above
		  'collections/stories',
		  'views/stories/single',
		  'text!templates/stories/list.html'
		  ], function($, _, Backbone,
				storiesCollection,
				storiesSingleView,
				storiesListTemplate) {
			
			
			var storiesListView = Backbone.View.extend({
				el : "#page",
				
				render : function() {
					$("#page").html("");
					console.log("rendering story list view");
					this.collection = storiesCollection;
					//goes through each story and adds a storySingleView for it
					this.collection.each(function(story) {
						
					      var singleView = new storiesSingleView({ model : story , thumb : true});
					      $(this.el).prepend(singleView.render());
					      //$(this.el).prepend(singleView.render());
					      console.log("how does it look like in a story? " + singleView.render());
					      //singleView.render();
					    }, this);
				    
				 // var data = {};
				 // var compiledTemplate = _.template(storiesListTemplate,
					// data);
				 // this.el.html(compiledTemplate);
					return this;
				},
				

				
			});
			return new storiesListView;
});
