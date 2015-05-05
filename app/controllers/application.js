App.ApplicationController = Ember.Controller.extend({
	
	emberStock: '123',
	breakingnews: false,
	actions: {
		bnews: function() {
			this.set('breakingnews', true);
		}
	},
});

App.ApplicationRoute = Ember.Route.extend({
	setupController: function(controller){
			this.stockTicker(controller);
	},
	stockTicker: function(controller){
		var self = this;
		var price = Math.floor(Math.random() * 50) - 1;

		controller.set('emberStock', price);
		
		Em.run.later(function(){
			self.stockTicker(controller);
		}, 1000);
	}
});

//Gets date using moment.js
Ember.Handlebars.registerBoundHelper('format-date', function(format, date) {
  return moment().format("LL");
});
