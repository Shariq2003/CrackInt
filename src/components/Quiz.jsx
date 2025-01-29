import { useState } from "react";
import QuizCard from "./QuizCard";

const Quiz = ({ Problems }) => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null); 
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);

    const currentProblem = Problems[index];

    // Handle the selected answer
    const handleAnswer = (selectedOption) => {
        setSelectedAnswer(selectedOption);
        setCorrectAnswer(currentProblem.options.find(option => option.is_answer));

        if (selectedOption.is_answer) {
            setScore(score + 1);
        }
        setIsAnswerSelected(true);
        if (index > Problems.length - 1) {
            alert(`Quiz completed! Your score is ${score + (selectedOption.is_answer ? 1 : 0)} out of ${Problems.length}`);
        }
    };

    return (
        <div className="w-3/4 p-6 overflow-y-auto h-screen">
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
                        className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
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
                            setIndex(index + 1)
                            setIsAnswerSelected(false);
                            setSelectedAnswer(null);
                            setCorrectAnswer(null);
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Quiz;
