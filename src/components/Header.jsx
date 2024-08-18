import { useState } from "react";
import "../styles/header.css"

function Header() {

    const [nightTheme, setNightTheme] = useState(true);

    function changeTheme() {
        const root = document.documentElement;
        if (nightTheme) {
            root.style.setProperty('--first-color', 'var(--light-color)');
            root.style.setProperty('--second-color', 'var(--dark-color)');
        } else {
            root.style.setProperty('--first-color', 'var(--dark-color)');
            root.style.setProperty('--second-color', 'var(--light-color)');
        }
        setNightTheme(!nightTheme);
    }

    return (
        <header>
            <div className="topHeader">
                <h1>QUENTIN RAMPTEAU</h1>
                <button className="nightModeButton" onClick={changeTheme}>{nightTheme ? '🌞' : '🌙'}</button>
            </div>
            <p>DÉVELOPPEUR WEB EN RECHERCHE D'ALTERNANCE</p>
        </header>
    )
}

export default Header