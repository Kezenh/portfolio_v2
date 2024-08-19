import { useState } from "react";
import "../styles/header.css"
import picture from "../assets/images/picture.jpg"
import { ReactComponent as Sun} from "../assets/icons/sun.svg";
import { ReactComponent as Moon} from "../assets/icons/moon.svg";

function Header() {

    const [nightTheme, setNightTheme] = useState(true);

    function changeTheme() {
        const root = document.documentElement;
        if (nightTheme) {
            root.style.setProperty('--first-color', 'var(--first-light-color)');
            root.style.setProperty('--second-color', 'var(--first-dark-color)');
            root.style.setProperty('--fourth-color', 'var(--second-light-color)');
            root.style.setProperty('--fifth-color', 'var(--second-dark-color)');
        } else {
            root.style.setProperty('--first-color', 'var(--first-dark-color)');
            root.style.setProperty('--second-color', 'var(--first-light-color)');
            root.style.setProperty('--fourth-color', 'var(--second-dark-color)');
            root.style.setProperty('--fifth-color', 'var(--second-light-color)');
        }
        setNightTheme(!nightTheme);
    }

    function scrollToFooter() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }

    return (
        <header>
            <button className="nightModeButton" onClick={changeTheme}>{nightTheme ? <Sun className="nightModeIcon" /> : <Moon className="nightModeIcon"/>}</button>
            <img className="picture" src={picture} alt="Quentin Rampteau"/>
            <div className="headerDescription">
                <h1>QUENTIN RAMPTEAU</h1>
                <h2 className="title">DÉVELOPPEUR WEB EN RECHERCHE D'ALTERNANCE</h2>
                <button onClick={scrollToFooter} className="contactButton">Contactez moi !</button>
            </div>
        </header>
    )
}

export default Header