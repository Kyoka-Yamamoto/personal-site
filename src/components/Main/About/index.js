import "./styles.css";
import reactLogo from "../../../images/react-logo.png";
import reduxLogo from "../../../images/redux-logo.png";
import nodeLogo from "../../../images/node-logo.png";
import expressLogo from "../../../images/express-logo.png";
import mongodbLogo from "../../../images/mongoDB-logo.png";
import postgresqlLogo from "../../../images/PostgreSQL_logo.png";

function About() {
    return (
        <div className="about">
            <div className="self-introduction">
                <div className="text">
                    Product-focused Developer from Japan, in Canada.
                </div>
            </div>
            <div className="tech-stack-container">
                <div className="tech-stack-logos">
                    <div className="react-logo">
                        <img src={reactLogo} alt="React Logo" />
                    </div>
                    <div className="redux-logo">
                        <img src={reduxLogo} alt="Redux Logo" />
                    </div>
                    <div className="node-logo">
                        <img src={nodeLogo} alt="Node Logo" />
                    </div>
                    <div className="express-logo">
                        <img src={expressLogo} alt="Express Logo" />
                    </div>
                    <div className="mongodb-logo">
                        <img src={mongodbLogo} alt="MongoDB Logo" />
                    </div>
                    <div className="postgresql-logo">
                        <img src={postgresqlLogo} alt="PostgreSQL Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
