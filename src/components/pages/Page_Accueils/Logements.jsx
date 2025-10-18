import '../../../styles/style_carte_logement.scss'
import { Link } from 'react-router-dom'

function Logement ({cover, title, id}) {
    return <>
    <article className="logement">
        <Link to={`/logement/${id}`}>
            <div class="logement__image">
                <img src={cover} alt={title} className='logement__image__img'/>
            </div>
            <p className='logement__text'>{title}</p>
        </Link>
    </article>
    </>
}

export default Logement