import '../../../styles/style_caroussel.css'
import arrowLeft from '../../../assets/images/arrow_left.png'
import arrowRight from '../../../assets/images/arrow_right.png'

function Caroussel({pictures = []}) {
    return <>
        <div className='caroussel'>
            <img src={arrowLeft} alt='left arrow' className='caroussel_arrow-left'/>
            <img src={arrowRight} alt='tight arrow' className='caroussel_arrow-tight'/>
            <img src={pictures[0]} alt="logement" className='caroussel-image'/>
            <div className='caroussel_count'>
                <p>1/5</p>
            </div>
        </div>
    
    </>
}

export default Caroussel