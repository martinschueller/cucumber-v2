define([
  'jquery',
  'underscore',
  'backbone',
  'collections/spices',
  'models/spice'
], function($, _, Backbone, spicesCollection, spiceModel){
	var storyModel = Backbone.Model.extend({
		
	    url : function() {
	          return "http://cucumber.iaep.de/stories";
	        },

	    defaults: function() {
	      return {
	        //title: "empty story",
	      };
	    },
		
		initialize: function() {
		      //if (!this.get("title")) {
		        //this.set({"stuff": this.defaults.title});
		      //}
		},
		
	    addSpice: function () {
	    	
	    	
	    	
	    }
		
		
	});

  return storyModel;
});
