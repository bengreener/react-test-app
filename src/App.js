import './App.css';
import server from '../src/model/server';
import ServerClass from './model/server-class'

const sc = new ServerClass();

function App() {
  return (
    <div id="app" className="App">
      <header className="App-header">
        <p>
          Module text: {server.getText()}
        </p>
        <p>
          Class getter text: {sc.text}
        </p>
        <p>
          Class function text: {sc.getText()}
        </p>
      </header>
    </div>
  );
}

export default App;