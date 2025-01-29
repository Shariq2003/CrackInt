import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "./QuizCard";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';

const Quiz = ({ Problems, isQuizStarted, setIsQuizStarted }) => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);

    const navigate = useNavigate();
    const currentProblem = Problems[index];

    useEffect(() => {
        if (isQuizStarted) {
            setIndex(0);
            setScore(0);
        }
    }, [isQuizStarted]);

    const handleAnswer = (selectedOption) => {
        setSelectedAnswer(selectedOption);
        setCorrectAnswer(currentProblem.options.find((option) => option.is_answer));

        const newScore = score + (selectedOption.is_answer ? 1 : 0);
        setScore(newScore);

        setIsAnswerSelected(true);

        if (index >= Problems.length - 1) {
            toast.success(`Quiz completed! Your score is ${newScore} out of ${Problems.length}`);

            setTimeout(() => {
                navigate("/home");
            }, 3500);
        }
    };



    return (
        <div className="w-3/4 p-6 overflow-hidden h-screen flex justify-center items-center bg-gray-900 text-gray-300">
            {isQuizStarted ? (
                <div className="w-full text-center bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-400">Quiz Questions</h2>
                    <QuizCard
                        problem={currentProblem}
                        onAnswer={handleAnswer}
                        selectedAnswer={selectedAnswer}
                    />
                    <div className="flex justify-between mt-4">
                        {index > 0 && (
                            <button
                                onClick={() => setIndex(index - 1)}
                                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition duration-300 cursor-pointer"
                            >
                                Previous
                            </button>
                        )}

                        <div className="font-semibold text-blue-300">
                            Question {index + 1} of {Problems.length}
                        </div>

                        {index < Problems.length - 1 && (
                            <button
                                onClick={() => {
                                    setIndex(index + 1);
                                    setIsAnswerSelected(false);
                                    setSelectedAnswer(null);
                                    setCorrectAnswer(null);
                                }}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 cursor-pointer"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-center bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-bold text-blue-400 mb-4 animate-fade-in">
                        Welcome to the Quiz!
                    </h2>
                    <p className="text-lg text-gray-400 mb-6 max-w-md">
                        Test your knowledge and challenge yourself. Click below to begin!
                    </p>
                    <button
                        onClick={() => {
                            setIsQuizStarted(true);
                            setIndex(0);
                            setScore(0);
                        }}
                        className="px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
                    >
                        Start Quiz 🚀
                    </button>
                </div>
            )}
        </div>
    );
};

Quiz.propTypes = {
    Problems: PropTypes.arrayOf(
        PropTypes.shape({
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    is_answer: PropTypes.bool.isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
    isQuizStarted: PropTypes.bool.isRequired,
    setIsQuizStarted: PropTypes.func.isRequired,
};

export default Quiz;
