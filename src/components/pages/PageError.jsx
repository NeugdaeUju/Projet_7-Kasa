import {Link} from 'react-router-dom'
import '../../styles/style_page-erreur.css'

function PageError () {
    return <>
    <div className='page-erreur'>
        <h1 className='page-erreur__title'>404</h1>
        <p className='page-erreur__text'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/' className='page-erreur__link'>Retourner sur la page d'accueil</Link>
    </div>
    </>
}

export default PageError
