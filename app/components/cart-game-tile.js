import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    remove(game) {
      this.get('shoppingCart').remove(game);
    }
  }
});
