import PropTypes from "prop-types";

const Sidebar = ({ Filter, setIsQuizStarted }) => {
    const difficultyLevels = [
        { level: 'easy' },
        { level: 'medium' },
        { level: 'hard' }
    ];

    return (
        <div className="w-1/4 bg-gray-800 text-white p-6 h-[calc(100vh-0rem)] border-r border-gray-700">
            <h2 className="text-2xl font-semibold mb-8 text-center text-gray-300">Welcome to the CrackInt!</h2>
            <p className="mb-6 text-sm text-gray-400 text-center">Choose Difficulty Level</p>
            <ul>
                {difficultyLevels.map((difficulty, index) => (
                    <li key={index} className="mb-4">
                        <button
                            className="w-full py-3 text-lg font-semibold text-white bg-gray-700 rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 cursor-pointer"
                            onClick={() => {
                                Filter(difficulty.level);
                                setIsQuizStarted(false);
                            }}
                        >
                            {difficulty.level.charAt(0).toUpperCase() + difficulty.level.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Sidebar.propTypes = {
    Filter: PropTypes.func.isRequired,
    setIsQuizStarted: PropTypes.func.isRequired,
};

export default Sidebar;
