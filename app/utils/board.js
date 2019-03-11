export default class Board {
  constructor(array) {
    this.array = array;
    this.width = Math.sqrt(array.length);
    this.height = this.width;
  }

  valueAt({row, column}) {
    return this.array[row * this.width + column];
  }

  setValueAt({row, column}, value) {
    return this.array[row * this.width + column] = value;
  }

  clone() {
    return new Board(this.array.slice());
  }

  get positions() {
    return Array(this.height).fill(null).reduce((positions, _, row) => {
      return positions.concat(Array(this.height).fill(null).map((_, column) => {
        return {row, column}
      }));
    }, []);
  }

  getAdjacentPositions({row, column}) {
    let positions = [];

    if (row > 0) {
      if (column > 0) {
        positions.push({row: row - 1, column: column - 1});
      }

      positions.push({row: row - 1, column});

      if (column + 1 < this.width) {
        positions.push({row: row - 1, column: column + 1});
      }
    }

    if (column > 0) {
      positions.push({row, column: column - 1});
    }

    if (column + 1 < this.width) {
      positions.push({row, column: column + 1});
    }

    if (row + 1 < this.height) {
      if (column > 0) {
        positions.push({row: row + 1, column: column - 1});
      }

      positions.push({row: row + 1, column});

      if (column + 1 < this.width) {
        positions.push({row: row + 1, column: column + 1});
      }
    }

    return positions;
  }
}
