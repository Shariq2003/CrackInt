import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Quiz from '../components/Quiz';

const QuizPage = ({ Subject, Problems, Filter }) => {
    useEffect(() => {
        if (Subject) {
            Filter('easy');
        }
    }, [Subject]);

    return (
        <div className="flex">
            <Sidebar Filter={Filter} />
            <div className="w-3/4 p-6 ml-64 overflow-y-auto h-screen">
                {Problems.length > 0 ? (
                    <Quiz Problems={Problems}/>
                ) : (
                    <div>No problems available for this level.</div>
                )}
            </div>
        </div>
    );
};

export default QuizPage;
