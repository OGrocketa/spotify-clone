import "./AlbumCard.css"


const AlbumCard = ({ albumData }) => {
    const cover = albumData.cover;
    const title = albumData.title;
    const type = albumData.type;
    const releaseDate = albumData.releaseDate;
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