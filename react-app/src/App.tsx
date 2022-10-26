import logo from './logo.svg';
import './App.css';
import Wallet from './components/wallet';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wallet />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section className="addtion">
          <p>message</p>
        </section>
      </header>
    </div>
  );
}

export default App;
