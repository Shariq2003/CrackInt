const Sidebar = () => {
    return (
        <div className="w-1/4 bg-gray-800 text-white p-6">
            <h2 className="text-2xl font-semibold mb-4">Welcome to the Quiz!</h2>
            <p className="mb-6">Choose a difficulty level to start:</p>

            {/* Difficulty Levels */}
            <ul>
                <li className="mb-4">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                        Easy
                    </button>
                </li>
                <li className="mb-4">
                    <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none">
                        Medium
                    </button>
                </li>
                <li className="mb-4">
                    <button className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
                        Hard
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
