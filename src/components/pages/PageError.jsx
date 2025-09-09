import {Link} from 'react-router-dom'
import Header from '../components_allPages/Header.jsx'
import Footer from '../components_allPages/Footer.jsx'
import '../../styles/style_page-erreur.css'

function PageError () {
    return <>
    <Header />
    <div className='page-erreur'>
        <h1 className='page-erreur__title'>404</h1>
        <p className='page-erreur__text'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/' className='page-erreur__link'>Retourner sur la page d'accueil</Link>
    </div>
    <Footer />
    </>
}

export default PageError
