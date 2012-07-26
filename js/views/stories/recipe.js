// Filename: views/stories/new
define([ 'jquery', 'underscore', 'backbone', 'models/recipe', 'models/story',
// Using the Require.js text! plugin, we are loaded raw text
// which will be used as our views primary template
'text!templates/stories/recipe.html'

], function($, _, Backbone, recipeModel, storyModel, storiesRecipeTemplate) {
	var storiesRecipeView = Backbone.View.extend({
		id : "1",
		model : recipeModel,
		tagName : "ul",
		className : "stories",
		el : "#page",
		events : {
			"submit" : "save"
		},

		initialize : function() {
			
		},

		save : function() {
			console.log("sunbmitting...")
			
			var self = this;
			var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";
			var story = new storyModel();
			story.save({
				//title : this.$('[name=title]').val(),
				//body : this.$('[name=body]').val()
			}, {
				success : function(model, resp) {

					// self.model = model;
					self.render();
					// self.delegateEvents();

					Backbone.history.saveLocation('documents/' + model.id);
				},
				error : function() {
					console.log("didnt save, get you f** code right!");
				}
			});

			return false;
		},
		render : function() {
			
			console.log("rendering template");
			var data = {
				recipe : this.model,
				_ : _
			};
			console.log("this is the stuff coming from the recipe model: " + this.model.get("template"));
			var compiledTemplate = _.template(storiesRecipeTemplate, data);
			$(this.el).html(compiledTemplate);
		}

	});
	return new storiesRecipeView;
});
