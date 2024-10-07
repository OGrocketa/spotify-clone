import "./Card.css"


const Card = ({imagePath, cardTitle, additionalInfo,customImageClass }) => {
    
    return(
        <div className="card-container">
            <img src={imagePath} alt="" />
            <div className="card-info">
                <h1 className="cardTitle">{cardTitle}</h1>
                <p className="additionalInfo">{additionalInfo}</p>
            </div>
        </div>
    );
}

export default Card