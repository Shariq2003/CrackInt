import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ currentSubject, heading, subheading, imageUrl, SubjectSetter }) => {
    const navigate = useNavigate();

    function handler(sub) {
        SubjectSetter(sub);
        navigate("/quizPage");
    }

    return (
        <div className="w-72 rounded-xl overflow-hidden shadow-md bg-gray-700 text-white transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer flex flex-col text-center">
            <img
                className="w-full h-48 object-cover rounded-t-xl"
                src={imageUrl}
                alt={heading}
            />
            <div className="p-6 flex flex-col flex-grow gap-4">
                <h3 className="text-2xl font-semibold">{heading}</h3>
                <p className="text-gray-400 text-sm flex-grow">{subheading}</p>
                <button
                    onClick={() => handler(currentSubject)}
                    className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-md hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 cursor-pointer"
                >
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

Card.propTypes = {
    currentSubject: PropTypes.number.isRequired,
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    SubjectSetter: PropTypes.func.isRequired,
};


export default Card;
