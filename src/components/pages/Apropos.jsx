import { Outlet } from "react-router-dom"

function Apropos () {
    return <div>
        <Outlet />
        <h1>Vous êtes sur la page A Propos</h1>
    </div>
}

export default Apropos