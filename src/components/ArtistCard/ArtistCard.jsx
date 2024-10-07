import "./ArtistCard.css"


const ArtistCard = ({artistData}) => {
    const avatar = artistData.avatar;
    const name = artistData.name;
    const type = artistData.type;

    return(
        <div className="artist-container">
            <img src={avatar} alt="Artist avatar"/>
            <div className="artist-info">
                <h1 className="artist-name">{name}</h1>
                <p className="artist-type">{type}</p>
            </div>
        </div>
    );
}

export default ArtistCard