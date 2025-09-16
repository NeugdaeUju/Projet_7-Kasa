import Hero from '../../components_allPages/Hero.jsx'
import Valeurs from './Valeurs.jsx'
import image from '../../../assets/images/image_hero_2.jpg'

function Apropos () {
    return <>
        <Hero 
            image={image}/>
        <Valeurs />
    </>
}

export default Apropos