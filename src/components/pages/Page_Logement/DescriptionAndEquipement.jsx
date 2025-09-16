import Dropdown from '../../components_allPages/Dropdown'
import '../../../styles/style_description-equipements.css'

function DescriptionAndEquipements ({description, equipements}) {
    return <>
        <div className='description-equipements'>
            <Dropdown 
                title={"Description"} 
                content={description} 
                page="logement"/>
            <Dropdown 
                title={"Equipements"} 
                content={equipements.map((item, i) => <li key={i} className='description-equipements__items'>{item}</li>)} 
                page="logement"/>
        </div>
    </>
}

export default DescriptionAndEquipements