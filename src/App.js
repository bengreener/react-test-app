// import logo from './logo.svg';
import './App.css';
import client from '../src/model/client';

function App() {

  const text = client.getData();

  return (
    <div id="app" className="App">
      <header className="App-header">
        <p>
          {text}
        </p>
      </header>
    </div>
  );
}

export default App;
