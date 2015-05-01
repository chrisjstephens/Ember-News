App.ApplicationController = Ember.Controller.extend({
	
	emberStock: "123",
	breakingnews: false,
	actions: {
		bnews: function() {
			this.set('breakingnews', true);
		}
	}
	
});

//Gets date using moment.js
Ember.Handlebars.registerBoundHelper('format-date', function(format, date) {
  return moment().format("LL");
});