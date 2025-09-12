import '../../../styles/style_tags-and-rating.css'

// Import des icons de rating
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function TagsAndRating ( {tags = [], rating = 0}) {
    return <>
        <div className='tags-and-rating'>
            <div className='tags-and-rating__tags-div'>
                {tags.map((tag, i) => (
                    <p key={i} className='tags-and-rating__tags-div__tag'>{tag}</p>
                ))}
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
    </>
}

export default TagsAndRating
