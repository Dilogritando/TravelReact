import React from "react";
import "../styles/_stepBox.scss"
const StepBox = (props) => {
    return (
        <div className="steps__box">
                <img src={props.src} alt={props.alt} />
                <div className="steps__box--content">
                    <h6>
                        {props.title}
                    </h6>
                    <p className="steps__box--description">
                        {props.description}
                    </p>
                </div>
        </div>
    )
}

export default StepBox;
