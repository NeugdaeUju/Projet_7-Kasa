import '../../../styles/style_title-and-host.css'

function TitleAndHost ({title , location, hostName, hostPicture}) {
    return<>
        <div className="title-and-host">
            <div className="title-and-host__title-div">
                <h2 className="title-and-host__title-div__title">{title}</h2>
                <h3 className="title-and-host__title-div__loc">{location}</h3>
            </div>
            <div className="title-and-host__host-div">
                <h3 className="title-and-host__host-div__name">{hostName}</h3>
                <img className="title-and-host__host-div__image" src={hostPicture} alt="image"></img>
            </div>
        </div>
    </>
}

export default TitleAndHost