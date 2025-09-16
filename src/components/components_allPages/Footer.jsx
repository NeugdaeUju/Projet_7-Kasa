import logoBlackWhite from '../../assets/images/LOGO-BlackWhite.svg'
import '../../styles/style_footer.css'

function Footer () {
    return <>
        <footer className='footer'>
            <img src={logoBlackWhite} alt='Logo Kasa Footer' className='footer__image'/>
            <p className='footer__text'>&#9426; 2022 Kasa. All rights reserved.</p>
        </footer>
    </>
}

export default Footer