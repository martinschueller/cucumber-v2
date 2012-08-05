define([
  'jquery',
  'underscore',
  'backbone',
  'models/spice'
], function($, _, Backbone, spiceModel){
  var spicesCollection = Backbone.Collection.extend({
    //for now the story is a simple model, later its going to be a model with models
	  
	model: spiceModel,
	storyID: 0,
    initialize : function(models, options) {
        if(options.thumb) {
            storyID = options.storyID;
        }

      },
      url : function() {
        return "http://cucumber.iaep.de/spices/" + storyID;
      },
      parse : function(data) {
    	  	
    	  }
  });

  return spicesCollection;
  
});
