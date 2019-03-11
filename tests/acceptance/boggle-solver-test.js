import { module, skip, test } from 'qunit';
import { click, fillIn, findAll, triggerKeyEvent, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | boggle solver', function(hooks) {
  setupApplicationTest(hooks);

  test('entering a board shows found words', async function(assert) {
    await visit('/');
    await fillIn('input', 'abcd');
    await click('button');

    assert.equal(currentURL(), '/abcd');

    let answers = findAll('#answers li').map(element => element.innerHTML);

    assert.equal(answers.length, 6);
    assert.equal(answers[0], 'ab');
    assert.equal(answers[1], 'ad');
    assert.equal(answers[2], 'bad');
    assert.equal(answers[3], 'cab');
    assert.equal(answers[4], 'cad');
    assert.equal(answers[5], 'dab');
  });

  skip('the form can be submitted with the enter key', async function(assert) {
    await visit('/');
    await fillIn('input', 'abcd');
    await triggerKeyEvent('input', 'keyup', 'Enter');

    assert.equal(currentURL(), '/abcd');
  });
});
