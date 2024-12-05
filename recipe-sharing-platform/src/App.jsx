import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import HomePage from './components/HomePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Tailwind CSS Test Message */}
      <div className="text-blue-500 text-center mt-10">
        Tailwind CSS is working!
      </div>

      {/* Render the HomePage Component */}
      <HomePage />
    </>
  );
}

export default App;
