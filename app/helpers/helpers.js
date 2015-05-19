//Gets date using moment.js
Ember.Handlebars.registerBoundHelper('format-date', function() {
  return moment().format("LL");
});