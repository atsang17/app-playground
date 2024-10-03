import {useState} from 'react';
import './App.css';

function Square() {

  const [value, setValue] = useState(null);

  function handleClick() {
    console.log('clicked!');
    setValue('X');
  }
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {

  // return a 3x3 grid of buttons
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}
