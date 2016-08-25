import Ember from 'ember';

export default Ember.Component.extend({
  newGameForm: false,
  actions: {
    showNewGameForm() {
      this.set('newGameForm', true);
    },
    addNewGame() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        collector_notes: this.get('collector_notes'),
        rating: this.get('rating'),
        image: this.get('image'),
        price: this.get('price')
      };
      this.set('newGameForm', false);
      this.sendAction('addNewGame', params);
    }
  }
});
