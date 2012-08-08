// Filename: views/home/recipeMenu
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/recipes',
  'text!templates/navigation/recipeMenu.html'
], function($, _, Backbone, menuListCollection, recipeMenuTemplate){

  var recipeMenuView = Backbone.View.extend({
    el: $("#menu"),
    collection : menuListCollection,
	initialize : function() {

		
	},
    render: function(){
    	console.log("this is the collection, dont know why I still need to tell you this?! : " + JSON.stringify(this.collection));

			$(this.el).html(this.compileTemplate());
    },
    
    compileTemplate : function(){
    	
    	var data = {
				menuList : this.collection,
				_ : _
			};
			var compiledTemplate = _.template(recipeMenuTemplate, data);
			return compiledTemplate;
    	
    }
    
  });
  return new recipeMenuView;
});
