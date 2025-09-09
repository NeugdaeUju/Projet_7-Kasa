import '../../../styles/style_dropdown.css'
import  React, { useState } from 'react'

function Dropdown ({title, content}) {
    const  [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsOpen(prev => !prev);
    }

    return <div className='dropdown'>
        <details open={isOpen} className='dropdown__button'>
            <summary className='dropdown__button__title' onClick={toggleDropdown}>{title}</summary>
            <p className={`dropdown__button__text ${isOpen ? "dropdown__button__text--open" : "dropdown__button__text--close"}`}
            >{content}</p>
        </details>
    </div>
}

// dropdown__button__text

export default Dropdown