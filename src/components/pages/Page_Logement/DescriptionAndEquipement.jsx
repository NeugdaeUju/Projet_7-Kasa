import Dropdown from '../Page_Apropos/Dropdown.jsx'
import '../../../styles/style_description-equipements.css'

function DescriptionAndEquipements ({description, equipements}) {
    return <>
        <div className='description-equipements'>
            <Dropdown title={"Description"} content={description} />
            <Dropdown title={"Equipements"} content={equipements.map((item, i) => <li key={i} className='description-equipements__items'>{item}</li>)} />
        </div>
    </>
}

export default DescriptionAndEquipements