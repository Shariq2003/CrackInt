import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import { PROBLEMS } from './data';

function App() {
  const [Subject, setSubject] = useState(null);
  const [Problems, setProblems] = useState(PROBLEMS);

  function SubjectSetter(currentSubject) {
    setSubject(currentSubject);
    console.log(currentSubject);
  }
  function Filter(level) {
    const filteredProblems = PROBLEMS.filter(
      (problem) => problem.key === Subject && problem.level === level
    );
    setProblems(filteredProblems);
    console.log(Problems);
  }

  return (
    <Routes>
      <Route path="/" element={<Home SubjectSetter={SubjectSetter}/>} />
      <Route
        path="/quizPage"
        element={<QuizPage Subject={Subject} Problems={Problems} Filter={Filter} />}
      />
    </Routes>
  );
}

export default App;
