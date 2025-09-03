// Création des routes de l'application

import { NavLink, Outlet } from "react-router-dom";

function Root () {
    return <>
    <header>
        <nav>
            <NavLink to='/'>Accueil</NavLink>
            <NavLink to='/a-propos'>A Propos</NavLink>
        </nav>
    </header>
    <div>
        <Outlet/>
    </div>
    </>
}

export default Root