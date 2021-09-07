import React from "react";
import "../styles/_subscribe.scss"
const Subscribe = () => {
    return (
            <div className="subscribe">
                <img src="" alt="Icon of paper plane" />
                <div className="suscribe__box">
                    <h3>Subscribe to get information, latest news and other interesting offers about Cobham</h3>
                    <div className="suscribe__box--buttons">
                        <img src="" alt="Envelope icon" />
                        <input type="email" name="Your Email" id="email" />
                        <input type="submit" value="Subscribe" />
                    </div>
                </div>
            </div>
    )
}

export default Subscribe;
