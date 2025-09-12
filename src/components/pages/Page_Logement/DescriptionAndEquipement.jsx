import Dropdown from '../Page_Apropos/Dropdown.jsx'
import '../../../styles/style_description-equipements.css'

function DescriptionAndEquipements () {
    return <>
        <div className='description-equipements'>
            <Dropdown title={"Description"} content={"Text fictif"} />
            <Dropdown title={"Equipements"} content={"Text fictif"} />
        </div>
    </>
}

export default DescriptionAndEquipements