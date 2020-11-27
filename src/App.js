import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Its branch Test Github! I created new branch and change header! Ура!
        </p>
        <p>
          Редактируйте <code>src/App.js</code> и сохраните для обновления!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Изучаем реакт!
        </a>
      </header>
    </div>
  );
}

export default App;
