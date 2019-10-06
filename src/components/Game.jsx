import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner, getWinSquares, checkFullSquares } from '../modules/utilities';

export default function Game() {
  // useState
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  // calculate Winner
  const currentSquares = history[currentHistoryIndex];
  const winner = calculateWinner(currentSquares);
  const winSquares = getWinSquares(currentSquares);
  const isDrawGame = (!winner && checkFullSquares(currentSquares)) ? true : false;

  // square click event
  const handleSquareClick = (index) => {
    if (!currentSquares[index] && !winner) {
      const newSquares = [...currentSquares];
      newSquares[index] = xIsNext ? 'X' : 'O';
      setXIsNext(!xIsNext);
      setHistory([...(history.slice(0, currentHistoryIndex + 1)), newSquares]);
      setCurrentHistoryIndex(currentHistoryIndex + 1);
    }
  }

  // move click event
  const handleMoveClick = (index) => {
    setCurrentHistoryIndex(index);
    setXIsNext(index % 2 === 0);
  }

  // write move button
  const moves = history.map((squares, index) => {
    const buttonStyle = {
      fontWeight: 'bold',
      color: 'blue'
    }
    return (
      <li key={index}>
        <button
          onClick={() => { handleMoveClick(index) }}
          style={index === currentHistoryIndex ? buttonStyle : {}}
        >{index === 0 ? 'Go to game start' : `Go to move #${index}`}</button>
      </li>
    );
  });

  // return jsx
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={currentSquares}
          xIsNext={xIsNext}
          winSquares={winSquares}
          onSquareClick={handleSquareClick}
        />
      </div>
      <div className="game-info">
        <div>{winner ? `Winner: ${winner}` : isDrawGame ? 'Draw Game!' : `Next player: ${xIsNext ? 'X' : 'O'}`}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}