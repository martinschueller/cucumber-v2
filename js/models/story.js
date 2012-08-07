define([
  'jquery',
  'underscore',
  'backbone',
  'collections/spices',
  'models/spice'
], function($, _, Backbone, spicesCollection, spiceModel){
	var storyModel = Backbone.Model.extend({
		
	    urlRoot : "http://cucumber.iaep.de/stories",
//		function() {
//	        if (this.isNew()){
//	            return "http://cucumber.iaep.de/stories";
//	          } else {
//	            return "http://cucumber.iaep.de/stories/" + this.id;
//	          }
//	        
//	        },

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
