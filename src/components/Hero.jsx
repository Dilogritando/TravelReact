import React from "react";
import "../styles/_hero.scss"
import PlayBtn from "../assets/header/PlayButton.png";
import Traveller from "../assets/header/Traveller.png";
const Hero = () => {
    return (
            <div className="hero">
                <div className="hero__texts">
                    <div className="hero__texts--subtitle subtitle" id="hero__texts--subtitle">
                        Best Destinations around the world
                    </div>
                    <h1>Travel, enjoy <br/> and live a new <br/> and full life</h1>
                    <p>
                        Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                    </p>
                    <div className="hero__texts--buttons">
                        <button type="button">Find out more</button>
                        <figure className="demo">
                            <img src={ PlayBtn } alt="Play icon for the demo" />
                            <figcaption>Demo</figcaption>
                        </figure>
                    </div>
                </div>
                <figure className="hero__image">
                    <img src={ Traveller } alt="Happy traveler with suitcase and tickets" />
                </figure>
            </div>
    )
}

export default Hero;
