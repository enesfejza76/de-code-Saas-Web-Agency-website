import React from "react";
import "./portfolioBoxItemContainer.css";
import PortfolioBoxImg from "../../atoms/portfolioBoxImg/portfolioBoxImg";
import ServiceBoxDescription from "../../atoms/serviceBoxDescription/serviceBoxDescription";

export default function PortfolioBoxItemContainer({ src, alt, description, style }) {
    return <div className="portfolioBoxItemContainer">
        <PortfolioBoxImg src={src} alt={alt} />
        <ServiceBoxDescription description={description} style={style} />
    </div>
}