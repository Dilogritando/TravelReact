import React from "react";
import "../styles/_destinationCards.scss"
import Compass from "../assets/destinations/Vector.svg"
const DestinationCards = (props) => {
    let image = props.src;
    let imageStyles = {
        backgroundPosition: '49% 10%',
        backgroundSize: '151% 151%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url(" + image + ")",
        borderRadius: "24px 24px 0 0",
    }
    return (
            <div className="destination__card">
                <figure style={ imageStyles }>
                </figure>
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
