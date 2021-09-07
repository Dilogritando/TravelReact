import React from "react";
import "../styles/_stepBox.scss"
const StepBox = (props) => {
    return (
        <div className="steps__box">
                <img src={props.src} alt={props.alt} />
                <h6>{props.title}</h6>
                <p className="steps__box--description">
                {props.description}
                </p>
        </div>
    )
}

export default StepBox;
