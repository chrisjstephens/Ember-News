App.ApplicationController = Ember.Controller.extend({
	
	emberStock: '123',
	breakingnews: false,
	actions: {
	},
	stockVal: function() {
		return this.emberStock;
	}
});

App.WeatherController = Ember.Controller.extend({
	weatherCity: 'city',
	weatherTemp: '0',
	weatherType: 'type',
	weatherIcon: 'icon',
	weatherInfo: 'info',
	weatherData: {}
});

