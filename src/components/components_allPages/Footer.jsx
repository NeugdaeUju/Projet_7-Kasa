import logoBlackWhite from '../../assets/images/LOGO-BlackWhite.svg'
import '../../styles/style_footer.css'

function Footer () {
    return <>
        <footer>
            <img src={logoBlackWhite} alt='Logo Kasa Footer'/>
            <p>&#9426; 2022 Kasa. All rights reserved.</p>
        </footer>
    </>
}

export default Footer