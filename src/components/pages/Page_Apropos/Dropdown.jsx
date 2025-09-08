import '../../../styles/style_dropdown.css'

function Dropdown ({title, content}) {
    return <div className='dropdown'>
        <details className='dropdown__button'>
            <summary className='dropdown__button__title'>{title}</summary>
            <p className='dropdown__button__text'>{content}</p>
        </details>
    </div>
}

export default Dropdown