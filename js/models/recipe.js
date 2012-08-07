define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var recipeModel = Backbone.Model.extend({
    

	  defaults: {
    },
    url : function() {
        return "http://cucumber.iaep.de/recipes/";
      },
    initialize: function(){
    },
      parse : function(data) {
    	  console.log("recipe data recieved! This is how it looks like: " + data);
    	    // need to return
    	    // the root of the response.
    	    return data;
    	  }

  });
  return recipeModel;

});
