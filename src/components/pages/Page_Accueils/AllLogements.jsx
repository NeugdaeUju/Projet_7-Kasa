import '../../../styles/style_accueil_logement.css'
import Logement from './Logements.jsx'
import logementListe from '../../../assets/logements.json'

function AllLogement () {
    return <>
        <div className="logements">
            <div className="logements__grid">
                {logementListe.map((logementListe) => (
                    <Logement 
                    key={logementListe.id}
                    id={logementListe.id}
                    cover={logementListe.cover}
                    title={logementListe.title}/>
                ))}
            </div>
        </div>
    </>
}

export default AllLogement