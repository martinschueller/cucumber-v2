// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/navigation/recipeMenu.html'
], function($, _, Backbone, recipeMenuTemplate){

  var recipeMenuView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      
    }
  });
  return new recipeMenuView;
});
