import './index.css';
import Board from "./components/Board";
import Clock from "./components/Clock";

function App() {
  return (
    <>
      <div id="app-wrapper">
	<div id="game-area">
          <div id="board-area">
	    <Board />
          </div>
          <div id="clock-area">
            <div className="clock-wrapper">
	      <Clock />
            </div>
            <div className="clock-wrapper">
	      <Clock />
            </div>
          </div>
	</div>
      </div>
    </>
  );
}

export default App;
