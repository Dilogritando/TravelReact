import React from "react";
import "../styles/_services.scss"
import ServiceCards from "./ServiceCards";
const Services = () => {
    return (
            <div className="services">
                <div className="services--subtitle subtitle">
                    CATEGORY
                </div>
                <h2>We Offer Best Services</h2>
                <div className="services__cards">
                    <ServiceCards src="" alt="Antenna pointing at the sky" title="Calculated Weather " description="Built Wicket longer admire do barton vanity itself do in it." />
                    <ServiceCards src="" alt="Plane taking off" title="Best Flights" description="Engrossed listening. Park gate sell they west hard for the."/>
                    <ServiceCards src="" alt="Classic radio microphone" title="Local Events" description="Barton vanity itself do in it. Preferd to men it engrossed listening. "/>
                    <ServiceCards src="" alt="Mechanical gear" title="Customization" description="We deliver outsourced aviation services for military customers"/>
                </div>
            </div>
    )
}

export default Services;
