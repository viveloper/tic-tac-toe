import React from 'react'

export default function Square(props) {
  const squareStyle = {
    background: 'grey'
  }
  return (
    <button
      className="square"
      onClick={() => { props.onSquareClick(props.index) }}
      style={props.isWinSquare ? squareStyle : {}}
    >{props.square}</button>
  );
}