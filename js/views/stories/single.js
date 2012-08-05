// Filename: views/stories/single
define([ 'jquery', 'underscore', 'backbone', 'models/story',
      // Using the Require.js text! plugin, we are loaded raw text
      // which will be used as our views primary template
      'text!templates/stories/storyThumb.html',
      'text!templates/stories/single.html'
         
         
         ], function($, _, Backbone, storyModel, storyThumbTemplate, storySingleTemplate) {
	var storiesSingleView = Backbone.View.extend({
		tagName : "li",
		className : "story",
		model : storyModel,
		thumb : true,
		compiledTemplate : "",
		initialize: function(options) {
	        if(options.thumb) {
	            thumb = options.thumb;
	        }
	    },

		render : function() {
			var data = {
					story : this.model,
					_ : _
				};
			
			
			if (this.options.thumb)
				{
				
				compiledTemplate = _.template(storyThumbTemplate, data);
				//$(this.el).html(compiledTemplate);
				//console.log("rendering thumb view and this is the generated html: " + compiledTemplate);
				return compiledTemplate;
				}
			
			else
				{
				var compiledTemplate = _.template(storySingleTemplate, data);
				$("#page").prepend(compiledTemplate);
				//$(this.el).prepend(compiledTemplate);
			//$(this.el).html(this.model.get("stuff"));
			//$(this.el).html("TEST");
				return this;
				}
			
			
		}
	});
	return storiesSingleView;
});
