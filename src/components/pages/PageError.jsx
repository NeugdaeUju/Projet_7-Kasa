import {Link} from 'react-router-dom'
import Header from '../components_allPages/Header.jsx'
import Footer from '../components_allPages/Footer.jsx'

function PageError () {
    return <>
    <Header />
    <h1>404</h1>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <Link to='/'>Retourner sur la page d'accueil</Link>
    <Footer />
    </>
}

export default PageError
