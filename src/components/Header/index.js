import "./styles.css";

function Header({ scrollToSection }) {
    return (
        <div className="header">
            <div className="name-logo" onClick={() => scrollToSection(0)}>
                K
            </div>
            <div className="menu-container">
                <div className="home-button" onClick={() => scrollToSection(0)}>
                    Home
                </div>
                <div
                    className="about-button"
                    onClick={() => scrollToSection(1)}
                >
                    About
                </div>
            </div>
        </div>
    );
}

export default Header;
