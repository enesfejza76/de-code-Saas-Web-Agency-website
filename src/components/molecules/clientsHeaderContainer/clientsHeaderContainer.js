import React from "react";
import "./clientsHeaderContainer.css";
import PortfolioBtn from "../../atoms/portfolioBtn/portfolioBtn";
import ServicesHeaderText from "../../atoms/servicesHeaderText/servicesHeaderText";

export default function ClientsHeaderContainer({ textBtn, text }) {
    return <div className="clientsHeaderContainer">
        <PortfolioBtn text={textBtn} />
        <ServicesHeaderText text={text} />
    </div>
}