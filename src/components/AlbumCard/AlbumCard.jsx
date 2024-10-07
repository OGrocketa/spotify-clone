import "./AlbumCard.css"


const AlbumCard = ({ albumdata }) => {
    const cover = albumdata.cover;
    const title = albumdata.title;
    const type = albumdata.type;
    const releaseDate = albumdata.releaseDate;
    const releaseYear = new Date(releaseDate).getFullYear();
  
    return (
      <>
        <div className="album-card-container">
          <img src={cover} alt="Album Cover" />
          <div className="album-info">
            <h1 className="album-title">{title}</h1>
            <p className="additional-info">
                <span className="date-release">{releaseYear}</span> • <span className="type">{type}</span>
            </p>
          </div>
         
        </div>
      </>
    );
  }
  
  export default AlbumCard;