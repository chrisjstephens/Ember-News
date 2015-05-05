App.ApplicationController = Ember.Controller.extend({
	
	emberStock: '123',
	breakingnews: false,
	actions: {
		/*bnews: function() {
			this.set('breakingnews', true);
		}*/
	},
	stockVal: function() {
		return this.emberStock;
	}
});

App.ApplicationRoute = Ember.Route.extend({
	setupController: function(controller){
			this.stockTicker(controller);
	},
	stockTicker: function(controller){
		var self = this;
		var price = Math.floor(Math.random() * 200) - 100;
		controller.set('emberStock', price);
		var getVal = controller.stockVal();
		
		//Pop up breaking news if stock price is down
		if(getVal > 0){
			controller.set('breakingnews', false);
		} else {
			controller.set('breakingnews', true);
		}
		
		Em.run.later(function(){
			self.stockTicker(controller);
		}, 15000);
	}
});

//Gets date using moment.js
Ember.Handlebars.registerBoundHelper('format-date', function(format, date) {
  return moment().format("LL");
});
