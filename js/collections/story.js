define([
  'jquery',
  'underscore',
  'backbone',
  'models/ingredient'
], function($, _, Backbone, ingredientModel){
  var storyCollection = Backbone.Collection.extend({
    model: ingredientModel

  });

  return new storyCollection;
});
