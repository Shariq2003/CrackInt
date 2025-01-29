import PropTypes from "prop-types";
const QuizCard = ({ problem, onAnswer, selectedAnswer }) => {
    return (
        <div className="w-full mb-6 p-4 border border-gray-300 rounded-lg">
            <h3 className="text-xl font-semibold">{problem.question}</h3>
            <ul className="mt-4">
                {problem.options.map((option, index) => {
                    let buttonClass = "w-full px-4 py-2 bg-gray-200 rounded-md mb-2 cursor-pointer font-semibold";
                    if (selectedAnswer) {
                        if (option.is_answer) {
                            buttonClass = "w-full px-4 py-2 bg-green-500 text-white rounded-md mb-2";
                        } else if (selectedAnswer.option === option.option) {
                            buttonClass = "w-full px-4 py-2 bg-red-500 text-white rounded-md mb-2";
                        }
                    }
                    return (
                        <li key={index} className="text-black">
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

QuizCard.propTypes = {
    problem: PropTypes.shape({
        question: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
            PropTypes.shape({
                option: PropTypes.string.isRequired,
                is_answer: PropTypes.bool.isRequired,
            })
        ).isRequired,
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
    selectedAnswer: PropTypes.shape({
        option: PropTypes.string,
    }),
    correctAnswer: PropTypes.shape({
        option: PropTypes.string,
    }),
};

export default QuizCard;
