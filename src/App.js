import './App.css';
import server from '../src/model/server';

function App() {

  const text = server.getData();

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
