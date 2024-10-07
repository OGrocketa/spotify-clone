import "./ArtistCard.css"
import Card from "../Card/Card";

const ArtistCard = ({artistData}) => {
    const avatar = artistData.avatar;
    const name = artistData.name;
    const type = artistData.type;

    return(
        <Card imagePath={avatar} cardTitle={name} additionalInfo={type} />
    );
}

export default ArtistCard