import wordFinder from 'boggler/utils/word-finder';
import { module, test } from 'qunit';

module('Unit | Utility | word-finder', function() {
  test('it finds words from a board and a list of words', function(assert) {
    let result = wordFinder('abcd', ['ab', 'ad', 'bad', 'cab', 'cad', 'dab', 'dad']);
    assert.deepEqual(result, ['ab', 'ad', 'bad', 'cab', 'cad', 'dab']);
  });

  test('it removes duplicates', function(assert) {
    let result = wordFinder('aaaa', ['aa']);
    assert.deepEqual(result, ['aa']);
  });
});
