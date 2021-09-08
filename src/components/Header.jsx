import React from "react";
import "../styles/_header.scss";
import Hero from "./Hero"
import Arrow from "../assets/header/Arrow.svg";
const Header = () => {
    return (
        <div className="hcontainer">
            <header>
                <div className="clear"></div>
                <nav>
                    <ul>
                        <li>
                            <a href="http://">
                                Destinations
                            </a>
                        </li>
                        <li>
                            <a href="http://">
                                Hotels
                            </a>
                        </li>
                        <li>
                            <a href="http://">
                                Flights
                            </a>
                        </li>
                        <li>
                            <a href="http://">
                                Bookings
                            </a>
                        </li>
                        <li>
                            <a href="http://">
                                Login
                            </a>
                        </li>
                    </ul>
                    <button type="button">Sign up</button>
                    <div className="language">
                        <p className="language__selected">EN</p>
                        <img src={ Arrow } alt="Downwards show more arrow" />
                    </div>
                </nav>
            </header>
            <Hero />
        </div>
    )
}

export default Header;
