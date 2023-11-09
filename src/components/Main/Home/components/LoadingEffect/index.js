import { useState, useEffect } from "react";
import LoadingSquare from "../LoadingSquare";
import "./styles.css";

function LoadingEffect() {
    const [exists, setExists] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setExists(false);
        }, 2500);
    }, []);

    const windowWidth = window.innerWidth;
    const windowHeight = Math.floor(window.innerHeight * 0.95);

    const squareWidth = Math.floor(windowWidth / 20);
    const numSquares = 20 * Math.floor(windowHeight / squareWidth);
    const squares = [];

    for (let i = 0; i < numSquares; i++) {
        squares.push(<LoadingSquare key={`square-${i}`} width={squareWidth} />);
    }

    return (
        <div
            className="loading-screen"
            style={{ display: exists ? "flex" : "none" }}
        >
            {squares}
        </div>
    );
}

export default LoadingEffect;
