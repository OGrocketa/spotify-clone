import "./ArtistBadge.css"

const ArtistBadge = ({artist}) => {
    return(
        <div className="artist-badge-container">
            <img src={artist.avatar} alt="artist avatar" />
            <div>
                <p>{artist.type}</p>
                <p>{artist.name}</p>
            </div>
        </div>
    );
}

export default ArtistBadge