import '../../../styles/style_dropdown.css'

function Dropdown ({title, content}) {
    return <div className='dropdown'>
        <details className='dropdown__button'>
            <summary className='dropdown__button__title'>{title}</summary>
            <p className='dropdown__button__text'>{content}</p>
        </details>
    </div>
}

/*
    const details = document.querySelectro(".dropdown__button");
    details.forEach((dropdown) => {
        dropdown.addEventListener("click", () => {
            const p = dropdown.querySelector(".dropdown__button__text");
            if (dropdown.open) {
                p.classList.add("dropdown__button__text--open");
                p.classList.remove("dropdown__button__text--close");
            } else {
                p.classList.add("dropdown__button__text--close");
                p.classList.remove("dropdown__button__text--open");
            }
        });
    });
*/

export default Dropdown