define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var recipeModel = Backbone.Model.extend({
    defaults: {
      score: 10
    },
    initialize: function(){
    }

  });
  return recipeModel;

});
