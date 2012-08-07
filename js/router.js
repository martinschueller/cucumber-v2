// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'views/home/main',
		 'views/stories/list', 'collections/stories',
		'views/stories/single', 'views/stories/recipe','views/navigation/recipeMenu' ], function($, _, Backbone, mainHomeView,
		 storiesListView, storiesCollection, StoriesSingleView, storyRecipeView, recipeMenuView) {
	var AppRouter = Backbone.Router.extend({
		routes : {
			
			// Define some URL routes
			'stories' : 'showStories',
			'story/:id' : 'showStory',
			'recipe' : 'showRecipe',
			
			// Default
			'*actions' : 'defaultAction'
		},
		// As above, call render on our loaded module
		// 'views/users/list'

		showStories : function() {
			storiesCollection.fetch({
				  success : function(collection) {
					  console.log("fetch was succesfull");
				    storiesListView.render();
				  },
			error : function(error) {
				console.log(error);
				}
				});
		},

		showStory : function(id) {
			//storiesSingleView.render();
			var storiesSingleView = new StoriesSingleView({thumb : false, id: id})
			storiesSingleView.model.fetch({
				success: function() {
					console.log("going to render story" + id);
					storiesSingleView.render();
				  },
				  error : function(error) {
				console.log("WTF are you DOING?! " + error);
				}
		
		});
		},
		showRecipe : function() {
			storyRecipeView.model.fetch({
					data: { id: 1} ,
					success: function() {
						console.log("going to render recipe");
						storyRecipeView.render();
					  },
					  error : function(error) {
					console.log(error);
					}
			
			});
			
		},

		defaultAction : function(actions) {
			// We have no matching route, lets display the home page
			mainHomeView.render();
		}
	});

	var initialize = function() {
		var app_router = new AppRouter;
		Backbone.history.start();
		//recipeMenuView.render();
	};
	return {
		initialize : initialize
	};
});
