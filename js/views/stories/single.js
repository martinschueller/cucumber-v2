// Filename: views/stories/single
define([ 'jquery', 'underscore', 'backbone',
      // Using the Require.js text! plugin, we are loaded raw text
      // which will be used as our views primary template
      'text!templates/stories/storyThumb.html',
      'text!templates/stories/single.html'
         
         
         ], function($, _, Backbone, storyThumbTemplate, storySingleTemplate) {
	var storiesSingleView = Backbone.View.extend({
		tagName : "li",
		className : "story",
		thumb : true,
		
		initialize: function(options) {
	        if(options.thumb) {
	            thumb = options.thumb;
	        }
	    },

		render : function() {
			// just render the tweet text as the content of this element.
			var data = {
					story : this.model,
					_ : _
				};
			
			
			if (this.options.thumb)
				{
				var compiledTemplate = _.template(storyThumbTemplate, data);
				$(this.el).html(compiledTemplate);
				
				}
			
			else
				{
				var compiledTemplate = _.template(storySingleTemplate, data);
				$("#page").prepend(compiledTemplate);
			//$(this.el).html(this.model.get("stuff"));
			//$(this.el).html("TEST");
				}
			
			return this;
		}
	});
	return storiesSingleView;
});
