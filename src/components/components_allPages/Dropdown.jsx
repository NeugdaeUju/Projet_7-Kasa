import '../../styles/style_dropdown.css'
import { useState } from 'react'
import image from '../../assets/images/arrow_dropdown.png'

function Dropdown ({title, content, page}) {
    const  [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(prev => !prev);

    return <>
    <div className={`dropdown ${page === "logement" ? "dropdown--logement" : ""}`}>
        <div className={`dropdown__button ${isOpen ? "dropdown__text--open" : "dropdown__text--close"}`} onClick={toggleDropdown}>
            <p className='dropdown__button__title'>{title}</p>
            <img src={image} className='dropdown__button__image'></img>
        </div>
        <div className='dropdown__text'>
            <p>{content}</p>
        </div>
    </div>
    </>
}

export default Dropdown