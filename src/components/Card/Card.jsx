import "./Card.css"
import { FaPlay } from "react-icons/fa";



const Card = ({imagePath, cardTitle, additionalInfo,isRound }) => {
    
    const imageClass = isRound ? "round-image" : "";

    return(
        <div className="card-container">
            <img src={imagePath} alt={cardTitle} className= {imageClass} />
            <button className="play-button">
                <FaPlay size={15}/>
            </button>
            <div className="card-info">
                <h1 className="cardTitle">{cardTitle}</h1>
                <p className="additionalInfo">{additionalInfo}</p>
            </div>

        </div>
    );
}

export default Card
