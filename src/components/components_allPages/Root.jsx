// Création des routes de l'application

import { NavLink } from "react-router-dom";

function Root () {
    return <>
        <nav>
            <NavLink to='/'
            className={({isActive}) => isActive ? "nav-link--actif" : "nav-link"}>Accueil</NavLink>
            <NavLink to='/a-propos'
            className={({isActive}) => isActive ? "nav-link--actif" : "nav-link"}>A Propos</NavLink>
        </nav>
    </>
}

export default Root