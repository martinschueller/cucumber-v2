// Filename: views/home/cookbook
define([
  'jquery',
  'underscore',
  'backbone',
  'views/navigation/recipeMenu',
  "views/stories/list",
  'text!templates/pages/cookbook.html'
  
], function($, _, Backbone, recipeMenuView, storiesListView, cookbookTemplate){

  var cookbookView = Backbone.View.extend({
    el: $("#page"),
	initialize : function() {
		//
		
	},
    render: function(){
    	storiesListView.collection.fetch({
			  success : function(collection) {
				  console.log("fetch was succesfull");
				  $('#preview').html(storiesListView.compileTemplate());
		},
		error : function(error) {
			console.log(error);
			}
			});
    	recipeMenuView.collection.fetch({
    		success: function() {
    			console.log("going to render recipeMenu");
    			//recipeMenuView.compileTemplate();
    			$('#recipe').html(recipeMenuView.compileTemplate());
    		  },
    		  error : function(error) {
    		console.log(error);
    		}
    	});
    	
    	
    	
    	
    	var data = {
				_ : _
			};
			var compiledTemplate = _.template(cookbookTemplate, data);
			$(this.el).html(compiledTemplate);
    }
	
	
	
  });
  return new cookbookView;
});
