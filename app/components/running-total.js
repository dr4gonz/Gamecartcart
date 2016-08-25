import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  totalPrice: Ember.computed('shoppingCart', function(){
    var price =  0;
    // console.log(this.get('shoppingCart').get('items')[0].get('price'));
    this.get('shoppingCart').get('items').forEach(function(game){
      // console.log(JSON.parse(JSON.stringify(game)));
      // console.log(game.get('price'));
      price += parseInt(game.get('price'));
    });
    // console.log(price);
    return parseInt(price);
  }),
});
