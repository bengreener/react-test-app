import './App.css';
import server from '../src/model/server';
import ServerClass from './model/server-class'

const sc = new ServerClass();

function App() {

  const text = server.getData();

  return (
    <div id="app" className="App">
      <header className="App-header">
        <p>
          Module text: {text}
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