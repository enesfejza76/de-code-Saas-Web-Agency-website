import React from "react";
import "./portfolio.css";
import PortfolioHeaderContainer from "../../organisms/portfolioHeaderContainer/portfolioHeaderContainer";
import PortfolioBoxContainer from "../../organisms/portfolioBoxContainer/portfolioBoxContainer";

export default function Portfolio() {
    return <div className="portfolio">
        <PortfolioHeaderContainer />
        <PortfolioBoxContainer />
    </div>
}