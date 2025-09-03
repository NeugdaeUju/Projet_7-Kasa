import Root from '../components_allPages/Root.jsx'
import logo from '../../assets/images/LOGO.svg'
import { Outlet } from 'react-router-dom'

function Header () {
    return <>
        <header>
            <img src={logo} alt='Logo Kasa'></img>
            <Root />
        </header>
        <div>
            <Outlet />
        </div>
    </>
}

export default Header