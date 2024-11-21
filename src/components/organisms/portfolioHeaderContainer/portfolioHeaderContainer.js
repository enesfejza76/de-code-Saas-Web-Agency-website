import React from "react";
import "./portfolioHeaderContainer.css";
import PortfolioHeaderItemContainer from "../../molecules/portfolioHeaderItemContainer/portfolioHeaderItemContainer";

export default function PortfolioHeaderContainer() {
    return <div className="portfolioHeaderContainer">
        <PortfolioHeaderItemContainer
            text="Portfolio"
            textHeader="Our Great Work"
            textBtn1="Website Optimization"
            textBtn2="Website Redesign"
            textBtn3="Search Engine Optimization"
        />
    </div>
}