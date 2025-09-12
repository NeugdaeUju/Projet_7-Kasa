import data from '../../../assets/logements.json'
import TitleAndHost from './TitleAndHost.jsx'
import TagsAndRating from './TagsAndRating.jsx'
import DescriptionAndEquipements from './DescriptionAndEquipement.jsx'
import Footer from '../../components_allPages/Footer.jsx'

function LogementPage () {
    return <>
    <TitleAndHost />
    <TagsAndRating />
    <DescriptionAndEquipements />
    <Footer />
    </>
}

export default LogementPage