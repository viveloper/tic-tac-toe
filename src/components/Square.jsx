import React from 'react'

export default function Square(props) {
  const winSquareStyle = {
    background: 'grey'
  }
  return (
    <button
      className="square"
      onClick={() => { props.onSquareClick(props.index) }}
      style={props.isWinSquare ? winSquareStyle : null}
    >{props.square}</button>
  );
}