import "./styles.css";
import githubLogo from "../../../images/github-mark.png";
import linkedinLogo from "../../../images/LI-In-Bug.png";

function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-title">Contact Me!</div>
                <div className="contact-options">
                    <div className="github">
                        <a href="https://github.com/Kyoka-Yamamoto">
                            <img
                                className="logo"
                                src={githubLogo}
                                alt="GitHub Logo"
                            />
                        </a>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/kyoka-yamamoto">
                            <img
                                className="logo"
                                src={linkedinLogo}
                                alt="LinkedIn Logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
