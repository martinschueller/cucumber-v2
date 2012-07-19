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
    }

  });
  return recipeModel;

});
