// Filename: views/stories/list
define(
		[ 'jquery', 'underscore', 'backbone',
		  
		  // Pull in the Collection module from above
		  'collections/stories',
		  'views/stories/single',
		  'text!templates/stories/list.html'
		  ], function($, _, Backbone,
				storiesCollection,
				StoriesSingleView,
				storiesListTemplate) {
			
			
			var storiesListView = Backbone.View.extend({
				el : "#preview",
				collection: storiesCollection,
				render : function() {
					//$("#page").html("");
					console.log("rendering story list view");
					$(this.el).html(this.compileTemplate);
					return this;
				},
				compileTemplate : function(){
					
					var compiledTemplate = "";
					var self = this;
					this.collection.each(function(story) {
						
					      var singleView = new StoriesSingleView({ model : story , thumb : true});
					      compiledTemplate += singleView.render();
					      //$(this.el).prepend(singleView.render());
					      //console.log("how does it look like in a story? " + singleView.render());
					      //singleView.render();
					    }, this);
					
					return compiledTemplate;
					
				}

				
			});
			return new storiesListView;
});
