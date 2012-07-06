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
				tagName : "ul",
				className : "stories",
				render : function() {
					this.collection = storiesCollection;
					//goes through each story and adds a storySingleView for it
					this.collection.each(function(story) {
						
					      var storiesSingleView = new storiesSingleView({ model : storyModel });
					      $(this.el).prepend(storiesSingleView.render().el);
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
