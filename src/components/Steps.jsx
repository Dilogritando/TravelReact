import React from "react";
import "../styles/_steps.scss"
import StepBox from "./StepBox";
const Steps = () => {
    return (
            <div className="steps">
                <div className="steps--subtitle subtitle">
                    Easy and cool
                </div>
                <div className="steps__content">
                    <div className="steps__content--texts">
                        <h2 className="steps__content--title">Book your next trip in 3 easy steps</h2>
                        <StepBox src="" alt="Figure of a square drawn in lines" title="Choose Destination" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "/>
                        <StepBox src="" alt="Figure of a man swimming" title="Make Payment" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "/>
                        <StepBox src="" alt="Icon of a taxi" title="Reach Airport on Selected Date" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "/>
                    </div>
                    <img src="" alt="Mock-up of the travel app" />
                </div>
            </div>
    )
}

export default Steps;
