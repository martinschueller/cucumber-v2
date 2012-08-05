define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
	var spiceModel = Backbone.Model.extend({
		
	     url : function() {
	          return "http://cucumber.iaep.de/snacks/";
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
		}
		
		
	});

  return spiceModel;
});
