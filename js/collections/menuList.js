define([
  'jquery',
  'underscore',
  'backbone',
  'models/menuItem'
], function($, _, Backbone, menuItemModel){
  var menuListCollection = Backbone.Collection.extend({
    //for now the story is a simple model, later its going to be a collection of ingredients
	  
	  model: menuItemModel,
  });

  return new menuListCollection;
  
});
