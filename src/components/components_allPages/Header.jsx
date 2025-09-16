import Root from '../components_allPages/Root.jsx'
import logo from '../../assets/images/LOGO.svg'
import '../../styles/style_header.css'

function Header () {
    return <>
        <header className='header'>
            <img src={logo} alt='Logo Kasa' className='header__image'></img>
            <Root />
        </header>
    </>
}

export default Header