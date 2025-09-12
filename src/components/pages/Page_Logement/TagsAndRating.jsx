import '../../../styles/style_tags-and-rating.css'

// Import des icons de rating
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function TagsAndRating () {
    return <>
        <div className='tags-and-rating'>
            <div className='tags-and-rating__tags-div'>
                <p className='tags-and-rating__tags-div__tag'>Tags</p>
                <p className='tags-and-rating__tags-div__tag'>Tags</p>
                <p className='tags-and-rating__tags-div__tag'>Tags</p>
            </div>
            <div className ='tags-and-rating__rating-div'>
                <FontAwesomeIcon icon={faStar} className ='tags-and-rating__rating-div__tag'/>
                <FontAwesomeIcon icon={faStar} className ='tags-and-rating__rating-div__tag'/>
                <FontAwesomeIcon icon={faStar} className ='tags-and-rating__rating-div__tag'/>
                <FontAwesomeIcon icon={faStar} className ='tags-and-rating__rating-div__tag'/>
                <FontAwesomeIcon icon={faStar} className ='tags-and-rating__rating-div__tag'/>
            </div>
        </div>
    </>
}

export default TagsAndRating
