// Création des routes de l'application

import { NavLink, Outlet } from "react-router-dom";
import logo from './assets/LOGO.svg'

function Root () {
    return <>
    <header>
        <img src={logo} alt='Logo Kasa'></img>
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