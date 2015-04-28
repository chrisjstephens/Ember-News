App.Router.map(function() {
  //this.route('home', { path: '/' });
  this.route('local', { path: '/local' });
  this.route('wnews', { path: '/wnews' });
  this.route('business', { path: '/business' });
  this.route('entertainment', { path: '/entertainment' });  
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