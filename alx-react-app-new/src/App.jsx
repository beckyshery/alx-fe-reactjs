import WelcomeMessage from './components/WelcomeMessage';
import Counter from './components/Counter';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center' }}>
        <h1>My Favorite Cities</h1>
      </header>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <WelcomeMessage />

      <Counter />

      <div className="App">
        <h1>User Profile</h1>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <UserProfile name="Bob" age="30" bio="Avid reader and tech enthusiast" />
        <UserProfile name="Carol" age="28" bio="Enjoys traveling and cooking" />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: 'lightgray' }}>
        <p>© 2023 City Lovers</p>
      </footer>
    </>
  );
}

export default App;
