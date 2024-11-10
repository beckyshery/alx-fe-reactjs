import WelcomeMessage from '../src/components/WelcomeMessage'
import { useState } from 'react'
import Header from './components/header;;;
import Footer from '../src/components/Footer'
import MainContent './components/MainContent;
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <header>
  <h1>My Favorite Cities</h1>
</header>
<maincontent>
  <p>I love to visit New York, Paris, and Tokyo.</p>
</maincontent>
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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="App">
      <h1>User Profile</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Avid reader and tech enthusiast" />
      <UserProfile name="Carol" age="28" bio="Enjoys traveling and cooking" />
    </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <footer>
  <p>© 2023 City Lovers</p>
</footer>
    </>
  )
}

export default App
