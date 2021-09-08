import React from "react";
import "../styles/_destinationCards.scss"
import Compass from "../assets/destinations/Vector.svg"
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
                        <img src={Compass} alt="Compass arrow pointing up" />
                        <p className="time--text">
                            {props.time}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default DestinationCards;
