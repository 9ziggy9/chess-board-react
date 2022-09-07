import './index.css';
import {useReducer, useEffect, useRef, useState} from 'react';
import {gameReducer, NEW_GAME} from './store/gameReducer.js';

const coords = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

function App() {
  // eslint-disable-next-line no-unused-vars
  const [gameState, dispatch] = useReducer(gameReducer, NEW_GAME);
  const [moving, setMoving] = useState(false);
  const {pieces} = gameState;
  const clickedSquare = useRef("");
  const selectedPiece = useRef("");

  // const createQueen = (piece, to) => dispatch({type: "ADD", payload: {piece, to}});
  const handleMove = e => {
    if (!moving) {
      setMoving(true);
      clickedSquare.current = e.target.id;
      selectedPiece.current = e.target.className;
      e.target.className = "";
    } else {
      setMoving(false);
      dispatch({
        type: "MOVE",
        payload: {
          from: clickedSquare.current,
          to: e.target.id,
          piece: selectedPiece.current
        }
      });
    }
  };

  useEffect(() => {
    dispatch({type: "MOVE",
              payload: {from: "e2", to: "e4", piece: "piece-P"}});
  }, []);

  return (
    <>
      <div id="app-wrapper">
	<div id="game-area">
	  <div id="board">
	    {coords.map((row, x) => (row.map((c, y) => (
		y % 2
		? <div className={x % 2 ? "light-square" : "dark-square"}
                       key={`board-${c}`}></div>
		: <div className={x % 2 ? "dark-square" : "light-square"}
		      key={`board-${c}`}></div>
	      ))
	    ))}
	  </div>
	  <div id="pieces">
	    {coords.map((row, x) => (row.map((c, y) => (
	      <div 
		className={pieces[c] ? pieces[c] : ""}
		onClick={(e) => handleMove(e)}
		key={`piece-${c}`} id={`${c}`}></div>
	      ))
	    ))}
	  </div>
	</div>
      </div>
    </>
  );
}

export default App;
