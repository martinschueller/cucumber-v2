// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/menuList',
  'text!templates/navigation/recipeMenu.html'
], function($, _, Backbone, menuListCollection, recipeMenuTemplate){

  var recipeMenuView = Backbone.View.extend({
    el: $("#menu"),
    collection : menuListCollection,
	initialize : function() {
		
		this.collection.add([{name: "Hallo", url: "#!/all"}, {name: "index", url: "#!/index"}]);

	},
    render: function(){
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
