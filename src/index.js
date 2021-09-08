import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Companies from "./components/Companies";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
ReactDOM.render(
    <>
        <Header />
        <Services />
        <Destinations />
        <Steps />
        <Testimonials />
        <Companies />
        <Subscribe />
        <Footer />
    </>,
    document.getElementById("app")
)
