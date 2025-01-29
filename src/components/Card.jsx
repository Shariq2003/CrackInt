import { useNavigate } from "react-router-dom";
const Card = ({ currentSubject,heading, subheading, imageUrl,setter }) => {
    const navigate = useNavigate();
    function handler(){
        setter(currentSubject);
        navigate("/quizPage");
    }
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <img
                className="w-full h-48 object-cover"
                src={imageUrl}
                alt={heading}
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{heading}</h3>
                <p className="text-gray-600 mt-2">{subheading}</p>
                <button onClick={handler(currentSubject)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default Card;
