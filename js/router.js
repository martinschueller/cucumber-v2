// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'views/home/main',
		'views/projects/list', 'views/users/list', 'views/stories/list', 'collections/stories',
		'views/stories/single', 'views/stories/recipe' ], function($, _, Backbone, mainHomeView,
		projectListView, userListView, storiesListView, storiesCollection, storiesSingleView, storyRecipeView) {
	var AppRouter = Backbone.Router.extend({
		routes : {
			// Define some URL routes
			'projects' : 'showProjects',
			'users' : 'showUsers',
			'stories' : 'showStories',
			'story' : 'showStory',
			'recipe' : 'showRecipe',

			// Default
			'*actions' : 'defaultAction'
		},
		showProjects : function() {
			// Call render on the module we loaded in via the dependency array
			// 'views/projects/list'
			projectListView.render();
		},
		// As above, call render on our loaded module
		// 'views/users/list'
		showUsers : function() {
			userListView.render();
		},

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

		showStory : function() {
			storiesSingleView.render();
		},
		showRecipe : function() {
			console.log("going to render recipe");
			storyRecipeView.render();
		},

		defaultAction : function(actions) {
			// We have no matching route, lets display the home page
			mainHomeView.render();
		}
	});

	var initialize = function() {
		var app_router = new AppRouter;
		Backbone.history.start();
	};
	return {
		initialize : initialize
	};
});
