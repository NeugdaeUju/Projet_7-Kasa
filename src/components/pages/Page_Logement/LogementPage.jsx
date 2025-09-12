import {useParams} from 'react-router-dom'
import data from '../../../assets/logements.json'
import TitleAndHost from './TitleAndHost.jsx'
import TagsAndRating from './TagsAndRating.jsx'
import DescriptionAndEquipements from './DescriptionAndEquipement.jsx'
import Footer from '../../components_allPages/Footer.jsx'
import Caroussel from './Caroussel.jsx'

function LogementPage () {
    const { id } = useParams()
    const logement = data.find(logement => logement.id === id)

    return <>
    <Caroussel
    pictures={logement.pictures}/>
    <TitleAndHost 
        title={logement.title}
        location={logement.location}
        hostName={logement.host.name}
        hostPicture={logement.host.picture} />
    <TagsAndRating 
        tags={logement.tags}
        rating={logement.rating}/>
    <DescriptionAndEquipements 
        description={logement.description}
        equipements={logement.equipments}/>
    <Footer />
    </>
}

export default LogementPage