import './index.css';

const coords = [
  ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"],
  ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"],
  ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"],
  ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"],
  ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8"],
  ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"],
  ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"],
  ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"]
];

function App() {
  return (
    <>
      <h1>Hello Chess!</h1>
      <div>Clock 1</div>
      <div>Clock 2</div>
      <div id="game-area">
	<div id="board">
          {coords.map((row, x) => (row.map((_, y) => (
              y % 2
                ? <div className={x % 2 ? "light-square" : "dark-square"}></div>
		: <div className={x % 2 ? "dark-square" : "light-square"}></div>
            ))
          ))};
	</div>
      </div>
    </>
  );
}

export default App;
