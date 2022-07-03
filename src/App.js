import logo from "./logo.svg";
import Button from "@mui/material/Button";
import Header from "../src/components/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit o que meu filho? <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          variant="contained"
          style={{
            backgroundColor: "green",
            color: "white",
            marginTop: "50px",
          }}
        >
          Hello World
        </Button>
      </header>
    </div>
  );
}

export default App;
