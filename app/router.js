App.Router.map(function() {
  //this.route('home', { path: '/' });
  this.route('local', { path: '/local' });
  this.route('wnews', { path: '/wnews' });
  this.route('business', { path: '/business' });
  this.route('entertainment', { path: '/entertainment' });  
  this.route('weather', { path: '/weather' });
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

App.LocalRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('Local');
  }
});

App.WnewsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('Wnews');
  }
});

App.BusinessRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('Business');
  }
});

App.EntertainmentRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('Entertainment');
  }
});