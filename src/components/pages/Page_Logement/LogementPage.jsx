import {useParams} from 'react-router-dom'
import data from '../../../assets/logements.json'
import TitleAndHost from './TitleAndHost.jsx'
import TagsAndRating from './TagsAndRating.jsx'
import DescriptionAndEquipements from './DescriptionAndEquipement.jsx'
import Footer from '../../components_allPages/Footer.jsx'

function LogementPage () {
    const { id } = useParams()
    const logement = data.find(logement => logement.id === id)

    return <>
    <TitleAndHost 
        title={logement.title}
        location={logement.location}
        hostName={logement.host.name}
        hostPicture={logement.host.picture} />
    <TagsAndRating />
    <DescriptionAndEquipements 
        description={logement.description}
        equipements={logement.equipments}/>
    <Footer />
    </>
}

export default LogementPage