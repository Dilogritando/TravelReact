import React from "react";
import "../styles/_testimonials.scss"
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
    return (
            <div className="testimonials">
                <div className="testimonials__title">
                    <div className="steps--subtitle subtitle">
                        TESTIMONIALS
                    </div>
                    <h2>What people say about Us.</h2>
                    <div className="testimonials__title--sliderBtn">
                    </div>
                </div>
                <div className="testimonials__slider">
                    <TestimonialCard src="" content="“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”" author="Mike taylor" location="Lahore, Rusia" />
                    <TestimonialCard src="" content="f believed or diverted no.f believed or diverted no." author="Chris Thomas" location="CEO of Fake agency" />
                    <div className="testimonials__slider--navArrows">
                        <img src="" alt="Arrow up or previous" />
                        <img src="" alt="Arrow down or next" />
                    </div>
                </div>
            </div>
    )
}

export default Testimonials;
