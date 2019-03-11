import wordFinder from 'boggler/utils/word-finder';
import { module, test } from 'qunit';

module('Unit | Utility | word-finder', function() {
  test('it finds words from a board', function(assert) {
    let result = wordFinder('a board');
    assert.deepEqual(result, ['hello', 'hello again']);
  });
});
