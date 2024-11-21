import React from "react";
import "./portfolioBoxContainer.css";
import PortfolioBoxImg1 from "../../assets/images/Imgae Place Holder.png";
import PortfolioBoxImg2 from "../../assets/images/Imgae Place Holder (1).png";
import PortfolioBoxImg3 from "../../assets/images/Imgae Place Holder (2).png";
import PortfolioBoxItemContainer from "../../molecules/portfolioBoxItemContainer/portfolioBoxItemContainer";

export default function PortfolioBoxContainer() {
    return <div className="portfolioBoxContainer">
        <PortfolioBoxItemContainer
            src={PortfolioBoxImg1}
            alt="Work image"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum "
        />
        <PortfolioBoxItemContainer
            src={PortfolioBoxImg2}
            alt="Work image"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum "
        />
        <PortfolioBoxItemContainer
            src={PortfolioBoxImg3}
            alt="Work image"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum "
        />
    </div>
}