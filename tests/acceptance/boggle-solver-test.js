import { module, test } from 'qunit';
import { click, fillIn, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | boggle solver', function(hooks) {
  setupApplicationTest(hooks);

  test('entering a board navigates to the solver', async function(assert) {
    await visit('/');
    await fillIn('input', 'ABCDEF');
    await click('button');

    assert.equal(currentURL(), '/ABCDEF');
  });
});
