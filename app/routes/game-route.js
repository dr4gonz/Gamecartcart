import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('game', params.game_id);
  },
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(game) {
      this.get('shoppingCart').add(game);
    }
  }
});
