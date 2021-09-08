import React from "react";
import "../styles/_testimonials.scss"
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
    return (
            <div className="testimonials">
                <div className="testimonials__text">
                    <div className="testimonials--subtitle subtitle">
                        TESTIMONIALS
                    </div>
                    <h2 className="testimonials__text--title">
                        What people say <br/>
                        about Us.
                    </h2>
                    <div className="testimonials__text--sliderBtn">
                        HALP
                    </div>
                </div>
                <div className="testimonials__slider">
                    <div className="testimonials__slider--cards">
                        <TestimonialCard src="" content="“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”" author="Mike taylor" location="Lahore, Rusia" />
                        <TestimonialCard src="" content="f believed or diverted no.f believed or diverted no." author="Chris Thomas" location="CEO of Fake agency" />
                    </div>
                    <div className="testimonials__slider--navArrows">
                        <img src="" alt="Arrow up or previous" />
                        <img src="" alt="Arrow down or next" />
                    </div>
                </div>
            </div>
    )
}

export default Testimonials;
