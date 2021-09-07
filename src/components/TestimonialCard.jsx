import React from "react";
import "../styles/_testimonialCard.scss"
const TestimonialCard = (props) => {
    return (
        <div className="testimonial__card">
            <img src={props.src} alt={props.author} />
            <div className="testimonial__card--content">
                <p className="testimony">{props.content}</p>
                <strong>{props.author}</strong>
                <span>{props.location}</span>
            </div>
        </div>
    )
}

export default TestimonialCard;
