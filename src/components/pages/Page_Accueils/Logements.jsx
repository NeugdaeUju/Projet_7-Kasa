import '../../../styles/style_carte_logement.css'

function Logement ({cover, title}) {
    return <>
    <article className="logement">
        <img src={cover} alt={title} className='logement__image'/>
        <p>{title}</p>
    </article>
    </>
}

export default Logement