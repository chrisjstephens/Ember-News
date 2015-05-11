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

App.WeatherRoute = Ember.Route.extend({
	setupController: function(controller){
			this.getWeather(controller);
	},
	getWeather: function(controller){
	var weatherData = {};
		$.ajax({
		  url: 'http://api.openweathermap.org/data/2.5/weather?q=Toronto,ON',
		  type: 'GET',
		  success: function(data, textStatus, xhr) {
			weatherData = data;
			//console.log(weatherData.name);
			console.log(weatherData);
			controller.set('weatherCity', weatherData.name);
			controller.set('weatherTemp', Math.round((weatherData.main.temp-273.15)*100/100));
			controller.set('weatherIcon', weatherData.weather[0].icon)
			controller.set('weatherType', weatherData.weather[0].main);
			controller.set('weatherInfo', weatherData.weather[0].description);
		  },
		  error: function(){
			  console.log("Error, ajax did not ccmplete.")
		  }
		});
	return weatherData;
	}
});