// Création des routes de l'application
import { NavLink } from "react-router-dom";

function Root () {
    return <>
        <nav className="header__nav">
            <NavLink to='/'
            className="header__nav__link">Accueil</NavLink>
            <NavLink to='/a-propos'
            className="header__nav__link">A Propos</NavLink>
        </nav>
    </>
}

export default Root