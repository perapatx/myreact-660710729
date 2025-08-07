import logo from './Hotel.svg';
import './App.css';
import Hello from './Hello';
import GoodBye from './GoodBye';
import JSXExamples from './components/jsxexample';
function App() {
  return (
    <div className="App">
      <Hello />
      <JSXExamples />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Perapat <code>Mok</code>  and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GoodBye />
      
    </div>
  );
}

export default App;
