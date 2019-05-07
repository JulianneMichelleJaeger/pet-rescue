import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByBreed(param) {
          if (param !== '') {
            return this.store.query('pet', { breed: param }).then((results) => {
                return { query: param, results: results };
            });
          } else {
            return this.store.findAll('pet').then((results) => {
                return { query: param, results: results };
            });
          }
        }
      }
});
