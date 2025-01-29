import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "./QuizCard";

const Quiz = ({ Problems, isQuizStarted, setIsQuizStarted }) => {
    useEffect(() => {
        if(isQuizStarted) {
            setIndex(0);
            setScore(0);
        }
    }, [isQuizStarted]);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null); 
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);

    const navigate = useNavigate();

    const currentProblem = Problems[index];

    const handleAnswer = (selectedOption) => {
        setSelectedAnswer(selectedOption);
        setCorrectAnswer(currentProblem.options.find(option => option.is_answer));

        if (selectedOption.is_answer) {
            setScore(score + 1);
        }
        setIsAnswerSelected(true);
        if (index >= Problems.length - 1) {
            setTimeout(() => {
                alert(`Quiz completed! Your score is ${score + (selectedOption.is_answer ? 1 : 0)} out of ${Problems.length}`);
                navigate('/home')
            }
            , 500);
        }
    };

    return (
        <div className="w-3/4 p-6 overflow-hidden h-screen flex justify-center items-center">
            {isQuizStarted ? 
            (
                <div className="w-full max-w-md text-center">
                    <h2 className="text-3xl font-semibold mb-4">Quiz Questions</h2>
                    <QuizCard
                        problem={currentProblem}
                        onAnswer={handleAnswer}
                        selectedAnswer={selectedAnswer}
                        correctAnswer={correctAnswer}
                    />
                    <div className="flex justify-between mt-4">
                        {index > 0 && (
                            <button
                                onClick={() => setIndex(index - 1)}
                                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 cursor-pointer"
                            >
                                Previous
                            </button>
                        )}

                        <div className="font-semibold">
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
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            ):(
                <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
                        Welcome to the Quiz!
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 max-w-md">
                        Test your knowledge and challenge yourself. Click below to begin!
                    </p>
                    <button
                        onClick={() => {setIsQuizStarted(true), setIndex(0), setScore(0)}}
                        className="px-8 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
                    >
                        Start Quiz 🚀
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
