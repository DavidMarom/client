import './App.css';
import { login, register, logout } from './service/auth'
import { fetchBooks } from './service/books'

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={() => login('user', 'pass')}>Login user pass</button>
        <br />
        <button onClick={() => login('david', 'qwe123')}>Login david qwe123</button>
        <button onClick={logout}>Logout</button>
        <button onClick={fetchBooks}>Fetch Books</button>

        <br />

        <button onClick={() => register('david', 'qwe123')}>Register with username and password: david qwe123</button>
      </header>
    </div>
  );
}

export default App;
