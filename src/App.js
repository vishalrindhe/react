import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Message from "./components/message";
import Counter from "./components/counter";
import FunctionClick from './components/functionClick';
import ClassClick from './components/classClick';



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
        {/* <Greet name="c" hName ="C" /> */}
        
        {/* <Welcome name="a" hName ="C"/>  */}
        {/* <Hello /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <FunctionClick></FunctionClick> */}
        <ClassClick></ClassClick>
        
      </header>
    </div>
  );
}

export default App;
