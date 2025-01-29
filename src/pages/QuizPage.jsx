import { useEffect, useCallback } from 'react';
import Sidebar from '../components/Sidebar';

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
                <h2 className="text-3xl font-semibold mb-4">Quiz Questions</h2>
                {Problems.length > 0 ? (
                    Problems.map((problem, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-xl font-semibold">{problem.question}</h3>
                            <ul className="mt-2">
                                {problem.options.map((option, idx) => (
                                    <li key={idx}>
                                        <button className="px-4 py-2 bg-gray-200 rounded-md mb-2">
                                            {option.option}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>No problems available for this level.</p>
                )}
            </div>
        </div>
    );
};

export default QuizPage;
