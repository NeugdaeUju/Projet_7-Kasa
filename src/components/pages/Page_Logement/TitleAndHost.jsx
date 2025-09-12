import '../../../styles/style_title-and-host.css'

// Import des icons de rating
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function TitleAndHost ({title , location, hostName, hostPicture, tags = [], rating = 0}) {
    return<>
        <div className="title-and-host">
            <div className="title-and-host__title-div">
                <h2 className="title-and-host__title-div__title">{title}</h2>
                <h3 className="title-and-host__title-div__loc">{location}</h3>
                <div className='tags-and-rating__tags-div'>
                {tags.map((tag, i) => (
                    <p key={i} className='tags-and-rating__tags-div__tag'>{tag}</p>
                ))}
            </div>
            </div>
            <div className="title-and-host__host-div">
                <div className="title-and-host__host-div__host">
                    <h3 className="title-and-host__host-div__host__name">{hostName}</h3>
                    <img className="title-and-host__host-div__host__image" src={hostPicture} alt="image"></img>
                </div>
                <div className ='tags-and-rating__rating-div'>
                {[...Array(5)].map((star, i) => (
                     <FontAwesomeIcon 
                    key={i}
                    icon={faStar} 
                    className ={
                        'tags-and-rating__rating-div__rating ' +
                        (i < rating ? 'tags-and-rating__rating-div__rating--filled' : 'tags-and-rating__rating-div__rating--empty' )}
                    />
                ))}
               
            </div>
            </div>
        </div>
    </>
}

export default TitleAndHost