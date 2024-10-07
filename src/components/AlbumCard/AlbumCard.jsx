import "./AlbumCard.css"
import Card from "../Card/Card";

const AlbumCard = ({ albumData }) => {
    const cover = albumData.cover;
    const title = albumData.title;
    const type = albumData.type;
    const releaseDate = albumData.releaseDate;
    const additionalInfo = new Date(releaseDate).getFullYear() + " • " + type;

  






    
    return (
      <Card imagePath = {cover} cardTitle={title} additionalInfo={additionalInfo}/>
    );
  }
  
  export default AlbumCard;