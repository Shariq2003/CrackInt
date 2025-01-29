import { useNavigate } from "react-router-dom";

const Card = ({ currentSubject, heading, subheading, imageUrl, SubjectSetter }) => {
    const navigate = useNavigate();

    function handler(sub) {
        SubjectSetter(sub);
        navigate("/quizPage");
    }

    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-white transition-transform transform hover:scale-101 hover:shadow-2xl duration-300 cursor-pointer">
            <img
                className="w-full h-48 object-cover rounded-t-xl"
                src={imageUrl}
                alt={heading}
            />
            <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">{heading}</h3>
                <p className="text-gray-600 text-sm">{subheading}</p>
                <button
                    onClick={() => handler(currentSubject)}
                    className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 cursor-pointer"
                >
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default Card;
