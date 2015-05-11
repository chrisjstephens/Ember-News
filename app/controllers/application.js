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

App.WeatherController = Ember.Controller.extend({
	weatherCity: 'city',
	weatherTemp: '0',
	weatherType: 'type',
	weatherIcon: 'icon',
	weatherInfo: 'info'
});




//Gets date using moment.js
Ember.Handlebars.registerBoundHelper('format-date', function() {
  return moment().format("LL");
});

Ember.Handlebars.registerBoundHelper('format-date-future', function(dayNumber) {
  //var date = moment().add('days', 1);
  //date = moment().format("LL");
  
  //console.log(dayNumber);
 
  return moment().add(dayNumber, 'D');
  
  //return date;
});

