import "./ArtistCard.css"
import Card from "../Card/Card";

const ArtistCard = ({artist}) => {
    const avatar = artist.avatar_url;
    const name = artist.name;
    const type = artist.artist_type;
    const isRound = true;

    return(
        <Card imagePath={avatar} cardTitle={name} additionalInfo={type} isRound= {isRound}/>
    );
}

export default ArtistCard
