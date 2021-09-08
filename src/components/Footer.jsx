import React from "react";
import "../styles/_footer.scss"
import FbIcon from "../assets/footer/FB.png";
import IGIcon from "../assets/footer/IG.png";
import TWIcon from "../assets/footer/Twitter.png";
import Apple from "../assets/footer/PlayStore.png";
import GStore from "../assets/footer/GooglePlay.png";
const Footer = () => {
    return (
        <footer>
            <div className="footer__info">
                <div className="footer__info--corporate">
                         <ul className="list">
                            <li className="list__title">Company</li>
                            <li className="list__content">
                                <a href="http://">
                                    About
                                </a>
                            </li>
                            <li className="list__content">
                                <a href="http://">
                                    Careers
                                </a>
                            </li>
                            <li className="list__content">
                                <a href="http://">
                                    Mobile
                                </a>
                            </li>
                         </ul>
                         <ul className="list">
                            <li className="list__title">Contact</li>
                            <li className="list__content">
                                <a href="http://">
                                    Help/FAQ
                                </a>
                            </li>
                            <li className="list__content">
                                <a href="http://">
                                    Press
                                </a>
                            </li>
                            <li className="list__content">
                                <a href="http://">
                                    Affiliates
                                </a>
                            </li>
                         </ul>
                         <ul className="list">
                            <li className="list__title">More</li>
                            <li className="list__content">
                                <a href="http://">
                                    Airline fees
                                </a>
                            </li>
                            <li className="list__content">
                                <a href="http://">
                                    Airline
                                </a>
                            </li>
                            <li className="list__content">
                                <a href="http://">
                                    Low fare tips
                                </a>
                            </li>
                         </ul>
                </div>
                <div className="footer__info--web">
                    <div className="footer__info--social">
                        <img src={FbIcon} alt="Facebook logo redirects to Facebook Page" />
                        <img src={IGIcon} alt="Instagram logo redirects to Instagram Page" />
                        <img src={TWIcon} alt="Twitter logo redirects to Twitter Page" />
                    </div>
                    <div className="footer__info--store">
                        <p className="list__content">
                            Discover our app
                        </p>
                        <div className="footer__buttons">
                            <img src={GStore} alt="Google Play Store" />
                            <img src={Apple} alt="Apple Store" />
                        </div>
                    </div>
                </div>
            </div>
            <p className="footer__contact">techTest@test.co</p>
        </footer>
    )
}

export default Footer;
