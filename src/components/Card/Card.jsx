import "./Card.css"


const Card = ({imagePath, cardTitle, additionalInfo,isRound }) => {
    
    const imageClass = isRound ? "round-image" : "";

    return(
        <div className="card-container">
            <img src={imagePath} alt={cardTitle} className= {imageClass} />
            <div className="card-info">
                <h1 className="cardTitle">{cardTitle}</h1>
                <p className="additionalInfo">{additionalInfo}</p>
            </div>
        </div>
    );
}

export default Card
