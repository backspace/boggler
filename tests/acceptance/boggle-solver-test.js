import { module, test } from 'qunit';
import { click, fillIn, find, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | boggle solver', function(hooks) {
  setupApplicationTest(hooks);

  test('entering a board shows found words', async function(assert) {
    await visit('/');
    await fillIn('input', 'ABCDEF');
    await click('button');

    assert.equal(currentURL(), '/ABCDEF');

    assert.equal(find('#answers li:first-child').innerHTML, 'hello');
    assert.equal(find('#answers li:last-child').innerHTML, 'hello again');
  });
});
