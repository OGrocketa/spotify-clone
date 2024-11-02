import "./AlbumCard.css"
import Card from "../Card/Card";

const AlbumCard = ({ albumData }) => {
  console.log(albumData);
    const cover = albumData.cover_url;
    const title = albumData.title;
    const type = albumData.album_type;
    const releaseDate = albumData.release_date;
    const additionalInfo = new Date(releaseDate).getFullYear() + " • " + type;


    return (
      <Card imagePath = {cover} cardTitle={title} additionalInfo={additionalInfo}/>
    );
  }
  
  export default AlbumCard;