// Filename: views/stories/single
define([ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone) {
	var storiesSingleView = Backbone.View.extend({
		tagName : "li",
		className : "story",
		render : function() {

			// just render the tweet text as the content of this element.
			//$(this.el).html(this.model.get("text"));
			$(this.el).html("TEST");
			return this;
		}
	});
	return new storiesSingleView;
});
