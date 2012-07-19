// Filename: views/stories/new
define([ 'jquery', 'underscore', 'backbone', 'models/story' ], function($, _, Backbone, storyModel) {
	var storyNewView = Backbone.View.extend({
		model: storyModel,
		tagName : "ul",
		className : "stories",
		events: {
	        "submit form": "save"
	    },
	    
	    initialize: function() {
	        this.render();
	    },
	    
	    save: function() {
	        var self = this;
	        var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";
	        
	        this.model.save({ title: this.$('[name=title]').val(), body: this.$('[name=body]').val() }, {
	            success: function(model, resp) {
	                new App.Views.Notice({ message: msg });
	                
	                self.model = model;
	                self.render();
	                self.delegateEvents();

	                Backbone.history.saveLocation('documents/' + model.id);
	            },
	            error: function() {
	                new App.Views.Error();
	            }
	        });
	        
	        return false;
	    },
		render: function() {
			console.log("hier wird die form gebaut");
	        var out = '<form>';
	        out += "<label for='title'>Title</label>";
	        out += "<input name='title' type='text' />";
	        
	        out += "<label for='body'>Body</label>";
	        //out += "<textarea name='body'>" + (this.model.escape('body') || '') + "</textarea>";
	        
	        var submitText = 'Create';
	        
	        out += "<button>" + submitText + "</button>";
	        out += "</form>";

	        //$(this.el).html(out);
	        //$('#app').html(this.el);
	        $('body').prepend(out);
	        console.log("form gebaut und sollte zu sehen sein");
	        return this;
	        //this.$('[name=title]').val(this.model.get('title')); // use val, for security reasons
	    }

	});
	return new storyNewView;
});
