import React from "react";
import "../styles/_serviceCards.scss"
const ServiceCards = (props) => {
    return (
            <div className="service__container">
                <div className="service__card">
                    <img src={props.src} alt={props.alt} />
                    <h6>{props.title}</h6>
                    <p className="service__card--description">
                        {props.description}
                    </p>
                </div>
            </div>
    )
}

export default ServiceCards;
