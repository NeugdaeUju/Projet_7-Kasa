import '../../../styles/style_title-and-host.css'

function TitleAndHost () {
    return<>
        <div className="title-and-host">
            <div className="title-and-host__title-div">
                <h2 className="title-and-host__title-div__title">Titre</h2>
                <h3 className="title-and-host__title-div__loc">Location</h3>
            </div>
            <div className="title-and-host__host-div">
                <h3 className="title-and-host__host-div__name">host Name</h3>
                <img className="title-and-host__host-div__image" src='image/host' alt="image"></img>
            </div>
        </div>
    </>
}

export default TitleAndHost