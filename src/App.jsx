import './App.css';
import { useLocalStorage } from './useLocalStorage';

function Demo() {
  const [token, { setItem, removeItem }] = useLocalStorage('token');

  return (
    <div>
      <p>
        Твой токен: { token }
      </p>
      <div>
        <button onClick={() => setItem('new-token')}>
          Задать токен
        </button>
        <button onClick={() => removeItem()}>
          Удалить токен
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Demo />
        </div>
      </header>
    </div>
  );
}

export default App;
