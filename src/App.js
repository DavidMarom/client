import './App.css';
import { login, register, logout } from './service/auth'
import { fetchBooks } from './service/books'

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={() => login('user', 'pass')}>Login with: user pass</button>
        <br />
        <button onClick={() => register('david', 'qwe123')}>Register with username and password: david qwe123</button>
        <button onClick={() => login('david', 'qwe123')}>Login with: david qwe123</button>
        <br />
        <button onClick={logout}>Logout</button>

        <br />
        <br />
        <button onClick={fetchBooks}>=== Fetch Books ===</button>

      </header>
    </div>
  );
}

export default App;
