import '../../../styles/style_caroussel.css'
import arrowLeft from '../../../assets/images/arrow_left.png'
import arrowRight from '../../../assets/images/arrow_right.png'
import {useState} from 'react'

function Caroussel({pictures = []}) {
    // Code sur le caroussel;
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    // Variables pour changer d'images au click sur les flèches
    const togoNext = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const togoPrevious = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }

    return <>
        <div className='caroussel'>
            { length >1 && (
                <img src={arrowLeft} alt='left arrow' className='caroussel_arrow-left' onClick={togoPrevious}/>
                )}
            { length >1 && (
                <img src={arrowRight} alt='right arrow' className='caroussel_arrow-right'  onClick={togoNext}/>
                )}
            <img src={pictures[current]} alt="logement" className='caroussel-image'/>
            { length >1 && (
            <div className='caroussel_count'>
                <p>{current + 1}/{length}</p>
            </div>
            )}
        </div>
    
    </>
}

export default Caroussel