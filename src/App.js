import './App.css';
import { login } from './service/auth'


function App() {

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={login}>Login</button>
      </header>
    </div>
  );
}

export default App;
