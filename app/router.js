App.Router.map(function() {
  //this.route('home', { path: '/' });
  this.route('local', { path: '/local' });
  this.route('worldnews', { path: '/worldnews' });
  this.route('business', { path: '/business' });
  this.route('entertainment', { path: '/entertainment' });  
});

App.LocalRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('Local');
  }
});