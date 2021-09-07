import React from "react";
import "../styles/_destinations.scss";
import DestinationCards from "./DestinationCards";
const Destinations = () => {
    return (
        <div className="destinations">
            <div className="destinations--subtitle subtitle">
                Top Selling
            </div>
            <h2>Top Destinations</h2>
            <div className="destinations__cards">
                <DestinationCards src="" alt="Picture of the Coliseum" name="Rome, Italy" price="$5,2k" time="10 Days Trip"/>
                <DestinationCards src="" alt="Picture of the Big Ben" name="London, UK" price="$4.2k" time="21 Days Trip"/>
                <DestinationCards src="" alt="Picture of the Hagia Sofia" name="Full Europe" price="$15k" time="28 Days Trip"/>
            </div>
        </div>
    )
}

export default Destinations;
