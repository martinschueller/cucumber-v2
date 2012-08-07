// Filename: views/stories/single
define([ 'jquery', 'underscore', 'backbone', 'models/story',
      // Using the Require.js text! plugin, we are loaded raw text
      // which will be used as our views primary template
      'text!templates/stories/storyThumb.html',
      'text!templates/stories/single.html'
         
         
         ], function($, _, Backbone, storyModel, storyThumbTemplate, storySingleTemplate) {
	var StoriesSingleView = Backbone.View.extend({
		tagName : "li",
		className : "story",
		el: "#page",
		model : storyModel,
		thumb : true,
		compiledTemplate : "",
		initialize: function(options) {
			console.log("story view created as. Is it a thumbnail: " + options.thumb);
	        if(options.thumb) {
	            thumb = options.thumb;
	        }
	        
	        if(options.id)
	        	{
	        	
	        	this.model = new storyModel({id : options.id});
	        	
	        	}
	        
	    },

		render : function() {
			console.log("Ich bin das neue Story model: " + JSON.stringify(this.model));
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
				$(this.el).html(compiledTemplate);
				return this;
				}
			
			
		}
	});
	return StoriesSingleView;
});
