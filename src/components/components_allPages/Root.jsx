// Création des routes de l'application

import { NavLink } from "react-router-dom";

function Root () {
    return <>
        <nav>
            <NavLink to='/'>Accueil</NavLink>
            <NavLink to='/a-propos'>A Propos</NavLink>
        </nav>
    </>
}

export default Root