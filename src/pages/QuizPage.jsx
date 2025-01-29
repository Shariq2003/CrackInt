import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Quiz from "../components/Quiz";
import PropTypes from "prop-types";

const QuizPage = ({ Subject, Problems, Filter, isQuizStarted, setIsQuizStarted }) => {
    useEffect(() => {
        if (Subject) {
            Filter("easy");
        }
    }, [Subject]);

    return (
        <div className="flex h-screen bg-gray-900 text-gray-300">
            <Sidebar Filter={Filter} setIsQuizStarted={setIsQuizStarted} />
            <div className="w-3/4 p-6 ml-50 overflow-hidden relative rounded-lg shadow-md">
                {Problems.length > 0 ? (
                    <Quiz Problems={Problems} isQuizStarted={isQuizStarted} setIsQuizStarted={setIsQuizStarted} />
                ) : (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold">
                        No problems available for this level.
                    </div>
                )}
            </div>
        </div>
    );
};

QuizPage.propTypes = {
    Subject: PropTypes.number,
    Problems: PropTypes.array.isRequired,
    Filter: PropTypes.func.isRequired,
    isQuizStarted: PropTypes.bool.isRequired,
    setIsQuizStarted: PropTypes.func.isRequired,
};

export default QuizPage;
