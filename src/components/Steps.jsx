import React from "react";
import "../styles/_steps.scss"
import StepBox from "./StepBox";
import Mock from "../assets/steps/StepsImage.png";
import Square from "../assets/steps/Choose.png";
import Payment from "../assets/steps/Payment.png";
import Taxi from "../assets/steps/Taxi.png";
const Steps = () => {
    return (
            <div className="steps">
                <div className="steps--subtitle subtitle">
                    Easy and cool
                </div>
                <div className="steps__content">
                    <div className="steps__content--texts">
                        <h2 className="steps__content--title">Book your next trip <br/> in 3 easy steps</h2>
                        <StepBox src={Square} alt="Figure of a square drawn in lines" title="Choose Destination" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "/>
                        <StepBox src={Payment} alt="Figure of a man swimming" title="Make Payment" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "/>
                        <StepBox src={Taxi} alt="Icon of a taxi" title="Reach Airport on Selected Date" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "/>
                    </div>
                    <img className="steps__content--image" src={Mock} alt="Mock-up of the travel app" />
                </div>
            </div>
    )
}

export default Steps;
