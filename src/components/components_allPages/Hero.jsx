import '../../styles/style_hero.css'

function Hero ({title, image}) {
    return <div className='hero'>
        <img src={image} alt="Image d'illustration"/>
        <p>{title}</p>
    </div>
}

export default Hero