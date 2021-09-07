import React from "react";
import "../styles/_destinationCards.scss"
const DestinationCards = (props) => {
    return (
            <div className="destination__card">
                <img src={props.src} alt={props.alt} />
                <div className="destination__card--content">
                    <div className="location">
                        <p className="location__name">{props.name}</p>
                        <p className="location__price">{props.price}</p>
                    </div>
                    <div className="time">
                        <img src="" alt="Compass arrow pointing up" />
                        <p className="time--text">
                            {props.time}
                        </p>
                    </div>
                </div>
                 <h6>{props.title}</h6>
                 <p className="service__card--description">
                    {props.description}
                 </p>
            </div>
    )
}

export default DestinationCards;
