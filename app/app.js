App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.LinkLiComponent = Em.Component.extend({
  tagName: 'li',
  classNameBindings: ['active'],
  active: function() {
    return this.get('childViews').anyBy('active');
  }.property('childViews.@each.active')
});
