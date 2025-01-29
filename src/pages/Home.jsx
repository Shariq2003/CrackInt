import Card from '../components/Card';
import { SUBJECTS } from "../data";
import PropTypes from "prop-types";

const Home = ({ SubjectSetter }) => {
    return (
        <div className="flex flex-wrap justify-center gap-8 p-6 bg-gray-900 min-h-screen text-white">
            {Object.values(SUBJECTS).map((subject) => (
                <Card
                    key={subject.key}
                    currentSubject={subject.key}
                    heading={subject.heading}
                    subheading={subject.subheading}
                    imageUrl={subject.imageUrl}
                    SubjectSetter={SubjectSetter}
                />
            ))}
        </div>
    );
};

Home.propTypes = {
    SubjectSetter: PropTypes.func.isRequired,
};

export default Home;
