import { useState } from "react";
import "./App.css";
import { Game } from "js-chess-engine";
import { ChessBoard, ChessBoardDndProvider } from "react-fen-chess-board";

const game = new Game();

function App() {
  const [inputValue, setInput] = useState("");

  const [from, setFrom] = useState("");

  const [fen, updateGameBoard] = useState(game.exportFEN());
  const [status, setJson] = useState(game.exportJson());

  const onSubmit = (event) => {


    if (!from) {
      setFrom(inputValue);
    } else {
      try{
        game.move(from, inputValue);
      }catch(error){
        console.log(error);
      }
      updateGameBoard(game.exportFEN());
      setJson(game.exportJson());
      setFrom("");
    } 

    setInput("");
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="actions">
        <p>Turn - {status.turn}</p>
        <form onSubmit={onSubmit}>
          <label className="actionLabel">{!from ? "From" : "To"}</label>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => {
              setInput(event.target.value);
            }}
            onSubmit={onSubmit}
          />
        </form>
      </div>
      {/* <ChessBoardDndProvider> */}
      <ChessBoard
        fen={fen}
        // onMove={({ fromPosition: from, toPosition: to }) => {
        //   game.move(from,to);
        //   updateGameBoard(game.exportFEN());
        // }}
      />
      {/* </ChessBoardDndProvider> */}
    </div>
  );
}

export default App;
