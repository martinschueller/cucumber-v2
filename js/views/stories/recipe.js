// Filename: views/stories/recipe
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
			//console.log("sunbmitting...")
			
			var self = this;
			var msg = this.model.isNew() ? 'Successfully created!' : "Saved!";
			var story = new storyModel();
			story.save({
				//content : this.$('[name=title]').val()
				//story :  JSON.stringify(this.$('#recipe :input')),
				story :  JSON.stringify(self.getFormData()),
				recipe_id : "1"
			}, {
				success : function(model, resp) {

					// self.model = model;
					self.render();
					console.log("Ich bin das neue model: " + JSON.stringify(model));
					// self.delegateEvents();

					//Backbone.history.saveLocation('documents/' + model.id);
				},
				error: function(model, response) {
		            console.log('error! ' + JSON.stringify(response));
					console.log("didnt save, get you f** code right!");
				}
			});

			return false;
		},
		render : function() {
			
			//console.log("rendering template");
			var data = {
				recipe : this.model,
				_ : _
			};
			//console.log("this is the stuff coming from the recipe model: " + this.model.get("template"));
			var compiledTemplate = _.template(storiesRecipeTemplate, data);
			$(this.el).html(compiledTemplate);
		},
		
		getFormData : function() {
			console.log("trying to get form data");
			var values = {};
			$.each($('#recipe').serializeArray(), function(i, field) {
				values[field.name] = field.value;
			});
			console.log("this is the stuff going to be saved: "+ values);
			return values;			
		}

	});
	return new storiesRecipeView;
});
