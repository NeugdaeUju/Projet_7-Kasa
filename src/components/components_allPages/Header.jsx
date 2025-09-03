import Root from '../components_allPages/Root.jsx'
import logo from '../../assets/images/LOGO.svg'

function Header () {
    return <header>
        <img src={logo} alt='Logo Kasa'></img>
        <Root />
    </header>
}

export default Header