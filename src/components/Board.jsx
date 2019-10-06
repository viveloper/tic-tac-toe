import React from 'react'
import Square from './Square'

export default function Board(props) {

  // write board (3x3)
  const rowSize = 3;
  const colSize = 3;
  const boardRows = [];
  for (let rows = 0; rows < rowSize; rows++) {
    const rowSquares = [];
    for (let cols = 0; cols < colSize; cols++) {
      const index = cols + rows * rowSize;
      const isWinSquare = props.winSquares.includes(index);
      rowSquares.push(
        <Square
          key={index}
          index={index}
          square={props.squares[index]}
          xIsNext={props.xIsNext}
          isWinSquare={isWinSquare}
          onSquareClick={props.onSquareClick}
        />
      );
    }
    boardRows.push(<div key={rows} className="board-row">{rowSquares}</div>)
  }

  const board = <div>{boardRows}</div>

  // return jsx
  return (
    <>
      {board}
    </>
  );
}