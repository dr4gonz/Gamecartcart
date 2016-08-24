import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  collector_notes: DS.attr(),
  price: DS.attr(),
  rating: DS.attr(),
  image: DS.attr()
});
