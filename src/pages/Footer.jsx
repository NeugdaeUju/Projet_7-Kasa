import logoBlackWhite from '../assets/LOGO-BlackWhite.svg'
import './style_footer.scss'

function Footer () {
    return <>
        <footer>
            <img src={logoBlackWhite} alt='Logo Kasa Footer'/>
            <p>&#9426; 2022 Kasa. All rights reserved.</p>
        </footer>
    </>
}

export default Footer