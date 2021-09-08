import React from "react";
import "../styles/_subscribe.scss"
const Subscribe = () => {
    return (
        <div className="subscribe">
            <img src="" alt="Icon of paper plane" />
            <div className="subscribe__box">
                <h3>
                    Subscribe to get information, latest news and other <br /> interesting offers about Cobham
                </h3>
                <div className="subscribe__box__buttons">
                    <img src="" alt="Envelope icon" />
                    <input className="subscribe__box__buttons--email" type="email" name="Your Email" id="email" />
                    <input className="subscribe__box__buttons--send" type="submit" value="Subscribe" />
                </div>
            </div>
        </div>
    )
}

export default Subscribe;
