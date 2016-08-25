import Ember from 'ember';

export default Ember.Service.extend({
  games: [],
  totalPrice: 0,

  add(game) {
    this.set('totalPrice', this.get('totalPrice') + parseInt(game.get('price')));
    this.get('games').pushObject(game);
  },
  remove(game) {
    this.set('totalPrice', this.get('totalPrice') - parseInt(game.get('price')));
    this.get('games').removeObject(game);
  },

});
