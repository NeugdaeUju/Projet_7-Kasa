import '../../styles/style_dropdown.css'
import { useState } from 'react'
import image from '../../assets/images/arrow_dropdown.png'

function Dropdown ({title, content, page}) {
    const  [isOpen, setIsOpen] = useState(false);

    /*const toggleDropdown = (e) => {
        e.preventDefault();
        setIsOpen(prev => !prev);
    }*/

    return <div className={`dropdown ${page === "logement" ? "dropdown--logement" : ""}`}>
        <div className='dropdown__button' /*onClick={toggleDropdown}*/>
            <p className='dropdown__button__title'>{title}</p>
            <img src={image} className='dropdown__button__image'></img>
        </div>
        <div className={`dropdown__button__text ${isOpen ? "dropdown__button__text--open" : "dropdown__button__text--close"}`}>
            <p>{content}</p>
        </div>
        
    </div>
}

/* 
<details open={isOpen} className='dropdown__button'>
            <summary className='dropdown__button__title' onClick={toggleDropdown}>{title}</summary>
            <p className={`dropdown__button__text ${isOpen ? "dropdown__button__text--open" : "dropdown__button__text--close"}`}
            >{content}</p>
        </details>
*/

export default Dropdown