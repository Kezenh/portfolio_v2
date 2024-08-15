import { useEffect, useState } from "react";

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
            <p>Salut, c'est la v1 de mon portfolio</p>
            <br />
            <br />
            <br />
            <br />
            <button onClick={changeTheme}>{nightTheme ? <p>Jour</p> : <p>Nuit</p>}</button>
        </header>
    )
}

export default Header