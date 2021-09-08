import React from "react";
import "../styles/_services.scss"
import ServiceCards from "./ServiceCards";
import Antenna from "../assets/services/Weather.png";
import Plane from "../assets/services/BestFlight.png";
import Local from "../assets/services/Local.png";
import Custom from "../assets/services/Customization.png";

const Services = () => {
    return (
            <div className="services">
                <div className="services--subtitle subtitle">
                    CATEGORY
                </div>
                <h2>We Offer Best Services</h2>
                <div className="services__cards">
                    <ServiceCards src={Antenna} alt="Antenna pointing at the sky" title="Calculated Weather " description="Built Wicket longer admire do barton vanity itself do in it." />
                    <ServiceCards src={Plane} alt="Plane taking off" title="Best Flights" description="Engrossed listening. Park gate sell they west hard for the."/>
                    <ServiceCards src={Local} alt="Classic radio microphone" title="Local Events" description="Barton vanity itself do in it. Preferd to men it engrossed listening. "/>
                    <ServiceCards src={Custom} alt="Mechanical gear" title="Customization" description="We deliver outsourced aviation services for military customers"/>
                </div>
            </div>
    )
}

export default Services;
