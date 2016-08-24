import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(game) {
    this.get('items').pushObject(game);
    console.log(this.get('items'));
  }
});
