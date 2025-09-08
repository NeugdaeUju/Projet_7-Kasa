import image from '../../../assets/images/image_hero.jpg'
import '../../../styles/style_hero.css'

function Hero () {
    return <div className='hero'>
        <img src={image} alt="Image d'illustration"/>
        <p>Chez vous, partout et ailleurs</p>
    </div>
}

export default Hero