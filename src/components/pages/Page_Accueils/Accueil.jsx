import Hero from '../../components_allPages/Hero.jsx'
import AllLogement from './AllLogements.jsx'
import image from '../../../assets/images/image_hero.jpg'

function Accueil () {
    return <>
        <Hero 
        image={image}
        title="Chez vous, partout et ailleurs"/>
        <AllLogement/>
    </>
}

export default Accueil