import '../../../styles/style_carte_logement.css'
import { Link } from 'react-router-dom'

function Logement ({cover, title, id}) {
    return <>
    <article className="logement">
        <Link to={`/logement/${id}`}>
            <img src={cover} alt={title} className='logement__image'/>
            <p className='logement__text'>{title}</p>
        </Link>
    </article>
    </>
}

export default Logement