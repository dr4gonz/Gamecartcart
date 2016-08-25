import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  totalPrice: 0,

  add(game) {
    this.set('totalPrice', this.get('totalPrice') + parseInt(game.get('price')));
    this.get('items').pushObject(game);
  }
});
