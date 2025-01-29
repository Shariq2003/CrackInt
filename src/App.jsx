import { useState } from 'react';
import {  Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';

function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  function setter(currentSubject) {
    setCurrentSubject(currentSubject);
  }
  return (
    <Routes>
        <Route path="/" element={<Home setter={setter}/>} />
        <Route path="/quizPage" element={<QuizPage currentSubject={currentSubject}/>} />
    </Routes>
  );
}

export default App;
