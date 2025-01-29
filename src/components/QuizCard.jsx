import React from "react";

const QuizCard = ({ problem, onAnswer, selectedAnswer, correctAnswer }) => {
    return (
        <div className="w-[30rem] mb-6 p-4 border border-gray-300 rounded-lg">
            <h3 className="text-xl font-semibold">{problem.question}</h3>
            <ul className="mt-4">
                {problem.options.map((option, index) => {
                    let buttonClass = "w-full px-4 py-2 bg-gray-200 rounded-md mb-2 cursor-pointer";
                    if (selectedAnswer) {
                        if (option.is_answer) {
                            buttonClass = "w-full px-4 py-2 bg-green-500 text-white rounded-md mb-2";
                        } else if (selectedAnswer.option === option.option) {
                            buttonClass = "w-full px-4 py-2 bg-red-500 text-white rounded-md mb-2";
                        }
                    }
                    return (
                        <li key={index}>
                            <button
                                onClick={() => onAnswer(option)}
                                className={buttonClass}
                            >
                                {option.option}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default QuizCard;
