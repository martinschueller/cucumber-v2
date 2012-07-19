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
		events : {
			"submit form" : "save"
		},

		initialize : function() {
			this.model.fetch();
		},

		save : function() {
			var self = this;
			var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";

			storyModel.save({
				//title : this.$('[name=title]').val(),
				//body : this.$('[name=body]').val()
			}, {
				success : function(model, resp) {
					new App.Views.Notice({
						message : msg
					});

					// self.model = model;
					self.render();
					// self.delegateEvents();

					Backbone.history.saveLocation('documents/' + model.id);
				},
				error : function() {
					new App.Views.Error();
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
			var compiledTemplate = _.template(storiesRecipeTemplate, data);
			$("#page").html(compiledTemplate);
		}

	});
	return new storiesRecipeView;
});
