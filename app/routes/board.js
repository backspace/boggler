import Route from '@ember/routing/route';
import wordFinder from 'boggler/utils/word-finder';
import words from 'boggler/utils/words';

export default Route.extend({
  model({ board }) {
    return wordFinder(board, words);
  }
});
