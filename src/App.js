import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from "./components/welcome";
import Hello from "./components/hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Vishal
        </p>
        {/* <Greet /> */}
        {/* <Welcome /> */}
        <Hello />

      </header>
    </div>
  );
}

export default App;
