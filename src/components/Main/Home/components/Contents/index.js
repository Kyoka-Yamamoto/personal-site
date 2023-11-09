import { useState, useEffect } from "react";
import downButtonImage from "../../../../../images/downarrow.png";

function Contents({ scrollToSection }) {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsAnimated(!isAnimated);
        }, 800);
    }, [isAnimated]);

    return (
        <div className="home-contents">
            <div className="description-container">
                <div className="name-container">Hi, I'm Kyoka.</div>
                <div className="jobtitle-container">Full-Stack Developer.</div>
            </div>
            <div className="scroll-button-container">
                <div
                    className="scroll-button"
                    onClick={() => scrollToSection(1)}
                    style={{
                        transform: `translate(0px, ${isAnimated ? 1 : 0}em)`,
                    }}
                >
                    <img
                        src={downButtonImage}
                        className="button-image"
                        alt="button-img"
                    ></img>
                </div>
            </div>
        </div>
    );
}

export default Contents;
