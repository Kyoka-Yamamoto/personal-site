import "./styles.css";
import Contents from "./components/Contents";
import LoadingEffect from "./components/LoadingEffect";

function Home({ scrollToSection }) {
    return (
        <div className="home">
            <div className="home-bg"></div>
            <LoadingEffect />
            <Contents scrollToSection={scrollToSection} />
        </div>
    );
}

export default Home;
