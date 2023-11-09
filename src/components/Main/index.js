import { useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import "./styles.css";

function Main({ scrollToSection }) {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className="main-container">
            <Home scrollToSection={scrollToSection} />
            <div style={{ zIndex: 3, position: "relative" }}>
                <About />
                <Contact />
            </div>
        </div>
    );
}

export default Main;
