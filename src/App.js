import { useState } from "react";
import logo from "./logo.svg";
import rickMorty from "./rickMorty.png";
import "./App.css";

function App() {
  const [onOff, setOnOff] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={onOff ? logo : rickMorty} className="App-logo" alt="logo" />
        <button onClick={() => setOnOff(!onOff)}>PRESS ME</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>ON OFF is set to {onOff ? "on" : "off"}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
