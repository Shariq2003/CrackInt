import Card from '../components/Card';
import { SUBJECTS } from "../data";

const Home = ({ SubjectSetter }) => {
    return (
        <div className="flex flex-wrap justify-center gap-8 p-6">
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

export default Home;
