// Filename: views/home/cookbook
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/menuList',
  'text!templates/navigation/recipeMenu.html'
], function($, _, Backbone, menuListCollection, recipeMenuTemplate){

  var recipeMenuView = Backbone.View.extend({
    el: $("#page"),
	initialize : function() {
		//
		
	},
    render: function(){
    	
    	recipeMenuView.render();
    	
    	var data = {
				menuList : this.collection,
				_ : _
			};
			var compiledTemplate = _.template(recipeMenuTemplate, data);
			$(this.el).html(compiledTemplate);
    }
  });
  return new recipeMenuView;
});
