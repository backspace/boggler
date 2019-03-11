import Board from 'boggler/utils/board';

export default function wordFinder(boardString, words) {
  let board = new Board(Array.from(boardString));

  let foundWords = board.positions.reduce((foundWords, position) => {
    let visitationBoard = new Board(Array(boardString.length).fill(false));

    return foundWords.concat(findWordsFrom(board, '', words, position, visitationBoard))
  }, []);
  return foundWords.uniq();
}

function findWordsFrom(board, stem, words, position, visitationBoard) {
  let characterAtPosition = board.valueAt(position);
  let newStem = `${stem}${characterAtPosition}`;

  if (words.some(word => word.startsWith(newStem))) {
    let newVisitationBoard = visitationBoard.clone();
    newVisitationBoard.setValueAt(position, true);

    let unvisitedAdjacentPositions = board.getAdjacentPositions(position).filter(adjacentPosition => {
      return !newVisitationBoard.valueAt(adjacentPosition);
    });

    let wordsFromAdjacentPositions = unvisitedAdjacentPositions.reduce((wordsFromAdjacentPositions, adjacentPosition) => {
      return wordsFromAdjacentPositions.concat(
        findWordsFrom(board, newStem, words, adjacentPosition, newVisitationBoard)
      );
    }, []);

    if (words.includes(newStem)) {
      return wordsFromAdjacentPositions.concat([newStem]);
    } else {
      return wordsFromAdjacentPositions;
    }
  } else {
    return [];
  }
}
