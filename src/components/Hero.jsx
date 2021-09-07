import React from "react";
import "../styles/_hero.scss"
const Hero = () => {
    return (
            <div className="hero">
                <div className="hero__texts">
                    <div className="hero__texts--subtitle subtitle">
                        Best Destinations around the world
                    </div>
                    <h1>Travel, enjoy and live a new and full life</h1>
                    <p>
                        Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                    </p>
                    <div className="hero__texts--buttons">
                        <button type="button">Find out more</button>
                        <figure className="demo">
                            <img src="" alt="Play icon for the demo" />
                            <figcaption>Demo</figcaption>
                        </figure>
                    </div>
                </div>
                <figure className="hero__image">
                    <img src="" alt="Happy traveler with suitcase and tickets" />
                </figure>
            </div>
    )
}

export default Hero;
