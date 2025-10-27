import {useParams} from 'react-router-dom'
import data from '../../../assets/logements.json'
import TitleAndHost from './TitleAndHost.jsx'
import DescriptionAndEquipements from './DescriptionAndEquipement.jsx'
import Caroussel from './Caroussel.jsx'
import PageError from '../PageError.jsx'

function LogementPage () {
    const { id } = useParams()
    const logement = data.find(logement => logement.id === id)

    // Si l'ID ne correspond à aucun logement => redirection page 404
    if (!logement) {
        return <PageError />
    }

    return <>
    <Caroussel
        pictures={logement.pictures}/>
    <TitleAndHost 
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        hostName={logement.host.name}
        hostPicture={logement.host.picture}
        rating={logement.rating} />
    <DescriptionAndEquipements 
        description={logement.description}
        equipements={logement.equipments}/>
    </>
}

export default LogementPage