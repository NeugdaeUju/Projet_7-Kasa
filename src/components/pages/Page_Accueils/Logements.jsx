import '../../../styles/style_carte_logement.css'

function Logement ({cover, title, id}) {
    return <>
    <article className="logement">
        <a href={`/logement/${id}`}>
        <img src={cover} alt={title} className='logement__image'/>
        <p>{title}</p>
        </a>
    </article>
    </>
}

export default Logement