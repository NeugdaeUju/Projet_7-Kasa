import '../../../styles/style_accueil_logement.css'
import Logement from './Logements.jsx'

function AllLogement () {
    return <>
        <div className="logements">
            <div className="logements__grid">
                <Logement/>
                <Logement/>
                <Logement/>
                <Logement/>
                <Logement/>
                <Logement/>
            </div>
        </div>
    </>
}

export default AllLogement