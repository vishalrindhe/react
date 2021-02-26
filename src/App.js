import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Message from "./components/message";
import Counter from "./components/counter";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
            Vishal
        </p> */}
        {/* <Greet name="a" >
          <p>This is paragraph</p>
          </Greet>
        <Greet name="b" />
        */}
        <Greet name="c" hName ="C" />
        
        {/* <Welcome name="a"/>  */}
        {/* <Hello /> */}
        {/* <Message /> */}
        {/* <Counter /> */}


      </header>
    </div>
  );
}

export default App;
