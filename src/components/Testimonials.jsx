import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/_testimonials.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import Mike from "../assets/testimonials/Headshot.png";
import ArrowUp from "../assets/testimonials/ArrowUp.svg";
import ArrowDown from "../assets/testimonials/ArrowDown.svg";


export default class Testimonials extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
        const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        };
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
                </div>
                <div className="testimonials__slider">
                    <div className="testimonials__slider--cards">
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <TestimonialCard src={Mike} content="“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”" author="Mike taylor" location="Lahore, Rusia" />
                            <TestimonialCard src={Mike} content="f believed or diverted no.f believed or diverted no." author="Chris Thomas" location="CEO of Fake agency" />
                        </Slider>
                    </div>
                    <div className="testimonials__slider--navArrows">
                        <button type="button" onClick={this.previous}>
                            <img src={ArrowUp} alt="Arrow up or previous" />
                        </button>
                        <button type="button" onClick={this.next}>
                            <img src={ArrowDown} alt="Arrow down or next" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
