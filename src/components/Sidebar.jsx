const Sidebar = ({ Filter }) => {
    const difficultyLevels = [
        { level: 'easy', color: 'blue' },
        { level: 'medium', color: 'yellow' },
        { level: 'hard', color: 'red' }
    ];

    return (
        <div className="w-1/6 bg-gray-800 text-white p-6 h-[calc(100vh-0rem)]">
            <h2 className="text-2xl font-semibold mb-4">Welcome to the Quiz!</h2>
            <p className="mb-6">Choose a difficulty level to start:</p>
            <ul>
                {difficultyLevels.map((difficulty, index) => (
                    <li key={index} className="mb-4">
                        <button
                            className={`w-full px-4 py-2 bg-${difficulty.color}-500 text-white rounded-md hover:bg-${difficulty.color}-600 focus:outline-none`}
                            onClick={() => Filter(difficulty.level)}
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
