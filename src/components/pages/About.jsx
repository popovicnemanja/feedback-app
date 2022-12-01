import { Link } from "react-router-dom";
import Card from "../shared/Card";

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <Link to="/"> Back To Home</Link>
      </div>
    </Card>
  );
};

export default About;
