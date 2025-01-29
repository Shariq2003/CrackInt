import { useState,useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import { PROBLEMS } from './data';

function App() {
  const [Subject, setSubject] = useState(null);
  const [Problems, setProblems] = useState(PROBLEMS);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  function SubjectSetter(currentSubject) {
    setSubject(currentSubject);
    setIsQuizStarted(false);
    console.log(currentSubject);
  }
  const Filter = useCallback((level)=> {
    const filteredProblems = PROBLEMS.filter(
      (problem) => problem.key === Subject && problem.level === level
    );
    setProblems(filteredProblems);
    console.log(Problems);
  },[Subject,Problems]);

  return (
    <Routes>
      <Route path="/" element={<Home SubjectSetter={SubjectSetter}/>} />
      <Route path="/home" element={<Home SubjectSetter={SubjectSetter}/>} />
      <Route
        path="/quizPage"
        element={<QuizPage Subject={Subject} Problems={Problems} Filter={Filter} isQuizStarted={isQuizStarted} setIsQuizStarted={setIsQuizStarted} />}
      />
    </Routes>
  );
}

export default App;
