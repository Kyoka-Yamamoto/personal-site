import "./App.css";
import React from "react";

import Main from "./components/Main";
import Header from "./components/Header";

function App() {
    const scrollToSection = (pageNum) => {
        window.scrollTo({
            top: pageNum > 0 ? pageNum * window.innerHeight + 80 : 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="App">
            <Header scrollToSection={scrollToSection} />
            <Main scrollToSection={scrollToSection} />
        </div>
    );
}

export default App;
