import wordFinder from 'boggler/utils/word-finder';
import { module, test } from 'qunit';

module('Unit | Utility | word-finder', function() {
  test('it finds non-diagonal words from a board and a list of words', function(assert) {
    let result = wordFinder('abcd', ['ab', 'ad', 'bad', 'cab', 'cad', 'dab', 'dad']);
    assert.deepEqual(result, ['ab', 'cab']);
  });
});
