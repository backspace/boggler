import Route from '@ember/routing/route';
import wordFinder from 'boggler/utils/word-finder';
import words from 'boggler/utils/words';

import Ember from 'ember';
import config from 'boggler/config/environment';

export default Route.extend({
  model({ board }) {
    this.controllerFor('application').set('board', board);

    if (Ember.testing) {
      return wordFinder(board, words);
    } else {
      return fetch(`${config.apiEndpoint}/${board}`).then(response => response.json());
    }
  }
});
