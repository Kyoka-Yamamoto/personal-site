import { useState, useEffect } from "react";
import "./styles.css";

function LoadingSquare({ width }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = Math.random() * 1500;

        setTimeout(() => {
            setVisible(false);
        }, timeout);
    }, []);

    return (
        <div
            className="square"
            style={{
                height: `${width}px`,
                width: `${width}px`,
                opacity: visible ? "100%" : "0%",
                transform: `scale(${visible ? 1 : 0})`,
            }}
        />
    );
}

export default LoadingSquare;
