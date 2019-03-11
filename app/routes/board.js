import Route from '@ember/routing/route';
import wordFinder from 'boggler/utils/word-finder';

export default Route.extend({
  model() {
    return wordFinder();
  }
});
