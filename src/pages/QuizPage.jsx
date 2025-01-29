import Sidebar from '../components/Sidebar';
import QuizCard from '../components/QuizCard';

const QuizPage = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <QuizCard />
        </div>
    );
};

export default QuizPage;