define([
  'jquery',
  'underscore',
  'backbone',
  'models/recipe'
], function($, _, Backbone, recipeModel){
  var recipesCollection = Backbone.Collection.extend({
    //for now the story is a simple model, later its going to be a model with models
	  
	  model: recipeModel,
    initialize : function(models, options) {
        //query options 
    	//this.query = options.query;
    	console.log("recipies collection initialized");

      },
      url : function() {
    	  return "http://cucumber.iaep.de/recipes/";
      },
      parse : function(data) {
    	  console.log("recipes data recieved! This is how it looks like: " + data);
    	    // need to return
    	    // the root of the response.
    	    return data;
    	  }
  });

  return new recipesCollection;
  
});
