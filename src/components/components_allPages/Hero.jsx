import '../../styles/style_hero.css'

function Hero ({title, image}) {
    return <>
    <div className='hero'>
        <img src={image} alt="Image d'illustration" className='hero__image'/>
        <p className='hero__text'>{title}</p>
    </div>
    </>
}

export default Hero