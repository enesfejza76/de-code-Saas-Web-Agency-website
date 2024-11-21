import React from "react";
import "./portfolioHeaderItemContainer.css";
import PortfolioText from "../../atoms/portfolioText/portfolioText";
import ServicesHeaderText from "../../atoms/servicesHeaderText/servicesHeaderText";
import PortfolioBtn from "../../atoms/portfolioBtn/portfolioBtn";

export default function PortfolioHeaderItemContainer({
    text,
    textHeader,
    textBtn1,
    textBtn2,
    textBtn3
}) {
    return <div className="portfolioHeaderContainer">
        <PortfolioText text={text} />
        <ServicesHeaderText text={textHeader} />
        <div className="portfolioHeaderContainerBtn">
            <PortfolioBtn text={textBtn1} />
            <PortfolioBtn text={textBtn2} />
            <PortfolioBtn text={textBtn3} />
        </div>
    </div>
}