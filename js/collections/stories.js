define([
  'jquery',
  'underscore',
  'backbone',
  'models/story'
], function($, _, Backbone, storyModel){
  var storiesCollection = Backbone.Collection.extend({
    //for now the story is a simple model, later its going to be a model with models
	  
	  model: storyModel,
    initialize : function(models, options) {
        //query options 
    	//this.query = options.query;
    	console.log("stories collection initialized");

      },
      url : function() {
        //return "http://cucumber.iaep.de/snacks/";
    	  return "http://cucumber.iaep.de/stories/";
      },
      parse : function(data) {
    	  console.log("stories data recieved! This is how it looks like: " + data);
    	    // need to return
    	    // the root of the response.
    	    return data;
    	  }
  });

  return new storiesCollection;
  
});
