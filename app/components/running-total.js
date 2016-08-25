import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  totalPrice: Ember.computed('shoppingCart.totalPrice', function(){
    return this.get('shoppingCart').get('totalPrice');
  }),
});
