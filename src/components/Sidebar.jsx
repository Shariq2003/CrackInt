const Sidebar = ({ Filter, setIsQuizStarted }) => {
    const difficultyLevels = [
        { level: 'easy', color: 'blue' },
        { level: 'medium', color: 'yellow' },
        { level: 'hard', color: 'red' }
    ];

    return (
        <div className="w-1/4 bg-gray-800 text-white p-6 h-[calc(100vh-0rem)] border-r border-gray-700">
            <h2 className="text-2xl font-semibold mb-8 text-center text-gray-300">Welcome to the Quiz!</h2>
            <p className="mb-6 text-sm text-gray-400 text-center">Choose Difficulty Level</p>
            <ul>
                {difficultyLevels.map((difficulty, index) => (
                    <li key={index} className="mb-4">
                        <button
                            className={`w-full px-6 py-3 text-lg font-semibold text-white bg-${difficulty.color}-500 rounded-lg shadow-md hover:bg-${difficulty.color}-600 focus:outline-none focus:ring-2 focus:ring-${difficulty.color}-400 transition duration-300 cursor-pointer`}
                            onClick={() =>{
                                Filter(difficulty.level);
                                setIsQuizStarted(false);
                            }
                            }
                        >
                            {difficulty.level.charAt(0).toUpperCase() + difficulty.level.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
