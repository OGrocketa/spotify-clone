import "./ArtistBadge.css"

const ArtistBadge = ({artist}) => {
    return(
        <div className="artist-badge-container">
            <img src={artist.avatar} alt="artist avatar" />
            <div className="additional-info">
                <p>{artist.type}</p>
                <p className="artist-name">{artist.name}</p>
            </div>
        </div>
    );
}

export default ArtistBadge