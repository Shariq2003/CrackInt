import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Quiz from '../components/Quiz';

const QuizPage = ({ Subject, Problems, Filter, isQuizStarted, setIsQuizStarted }) => {
    useEffect(() => {
        if (Subject) {
            Filter('easy');
        }
    }, [Subject]);

    return (
        <div className="flex h-screen">
            <Sidebar Filter={Filter} setIsQuizStarted={setIsQuizStarted} />
            <div className="w-3/4 p-6 ml-64 overflow-hidden relative">
                {Problems.length > 0 ? (
                    <Quiz Problems={Problems} isQuizStarted={isQuizStarted} setIsQuizStarted={setIsQuizStarted} />
                ) : (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        No problems available for this level.
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizPage;
