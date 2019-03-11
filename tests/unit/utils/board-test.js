import Board from 'boggler/utils/board';
import { module, test } from 'qunit';

module('Unit | Utility | board', function() {
  test('it creates a board from an array of characters', function(assert) {
    let board = new Board(Array.from('abcd'));

    assert.equal(board.valueAt({row: 0, column: 0}), 'a');
    assert.equal(board.valueAt({row: 1, column: 1}), 'd');
  });

  test('it allows mutation of values', function(assert) {
    let board = new Board(Array.from('abcd'));
    board.setValueAt({row: 0, column: 0}, false);

    assert.equal(board.valueAt({row: 0, column: 0}), false);
  });

  test('it allows cloning', function(assert) {
    let board = new Board(Array.from('abcd'));
    let clone = board.clone();

    board.setValueAt({row: 0, column: 0}, false);

    assert.equal(board.valueAt({row: 0, column: 0}), false);
    assert.equal(clone.valueAt({row: 0, column: 0}), 'a');
  });

  test('it returns a list of all positions', function(assert) {
    let board = new Board(Array(4));
    let positions = board.positions;

    assert.deepEqual(positions[0], {row: 0, column: 0});
    assert.deepEqual(positions[1], {row: 0, column: 1});
    assert.deepEqual(positions[2], {row: 1, column: 0});
    assert.deepEqual(positions[3], {row: 1, column: 1});
  });

  test('it lists adjacent positions', function(assert) {
    let board = new Board(Array(9));

    let adjacentUnvisitedPositions = board.getAdjacentPositions({row: 1, column: 1});

    assert.equal(adjacentUnvisitedPositions.length, 8);
    assert.deepEqual(adjacentUnvisitedPositions[0], {row: 0, column: 0});
    assert.deepEqual(adjacentUnvisitedPositions[1], {row: 0, column: 1});
    assert.deepEqual(adjacentUnvisitedPositions[2], {row: 0, column: 2});
    assert.deepEqual(adjacentUnvisitedPositions[3], {row: 1, column: 0});
    assert.deepEqual(adjacentUnvisitedPositions[4], {row: 1, column: 2});
    assert.deepEqual(adjacentUnvisitedPositions[5], {row: 2, column: 0});
    assert.deepEqual(adjacentUnvisitedPositions[6], {row: 2, column: 1});
    assert.deepEqual(adjacentUnvisitedPositions[7], {row: 2, column: 2});

    let fromUpperLeftPositions = board.getAdjacentPositions({row: 0, column: 0});

    assert.equal(fromUpperLeftPositions.length, 3);
    assert.deepEqual(fromUpperLeftPositions[0], {row: 0, column: 1});
    assert.deepEqual(fromUpperLeftPositions[1], {row: 1, column: 0});
    assert.deepEqual(fromUpperLeftPositions[2], {row: 1, column: 1});

    let fromBottomRightPositions = board.getAdjacentPositions({row: 2, column: 2});

    assert.equal(fromBottomRightPositions.length, 3);
    assert.deepEqual(fromBottomRightPositions[0], {row: 1, column: 1});
    assert.deepEqual(fromBottomRightPositions[1], {row: 1, column: 2});
    assert.deepEqual(fromBottomRightPositions[2], {row: 2, column: 1});
  });
});
