import "./ArtistCard.css"
import Card from "../Card/Card";

const ArtistCard = ({artistData}) => {
    const avatar = artistData.avatar;
    const name = artistData.name;
    const type = artistData.type;
    const isRound = true;

    return(
        <Card imagePath={avatar} cardTitle={name} additionalInfo={type} isRound= {isRound}/>
    );
}

export default ArtistCard
