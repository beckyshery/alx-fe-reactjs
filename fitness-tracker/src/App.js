import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LogWorkout from './components/LogWorkout';
import LogMeal from './components/LogMeal';
import Progress from './components/Progress';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log-workout" element={<LogWorkout />} />
        <Route path="/log-meal" element={<LogMeal />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Router>
  );
}

export default App;
