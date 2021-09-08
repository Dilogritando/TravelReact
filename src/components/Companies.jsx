import React from "react";
import "../styles/_companies.scss"
import Axon from "../assets/companies/axon.png";
import Jetstar from "../assets/companies/Jetstar.png";
import Expedia from "../assets/companies/Expedia.png";
import Qantas from "../assets/companies/Qantas.png";
import Alitalia from "../assets/companies/Alitalia.png";
const Companies = () => {
    return (
            <div className="companies">
                <img src={Axon} alt="Logo for Axon" />
                <img src={Jetstar} alt="Jetstar Logo" />
                <img src={Expedia} alt="Expedia Logo" />
                <img src={Qantas} alt="Qantas Logo" />
                <img src={Alitalia} alt="Alitalia Logo" />
            </div>
    )
}

export default Companies;
