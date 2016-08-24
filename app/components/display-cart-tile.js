import Ember from 'ember';

export default Ember.Component.extend({
  price: 0,
  shoppingCart: Ember.inject.service(),
  totalPrice: Ember.computed('shoppingCart', function(){
    console.log(this.get('shoppingCart'));
    for(var i=0; i<this.get('shoppingCart').items.length; i++) {
      this.price += parseInt(this.get('shoppingCart').items[i].price);
    }
    return this.price;
  }),
});
