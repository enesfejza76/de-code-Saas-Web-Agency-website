import React from "react";
import "./blogsHeaderItemContainer.css";
import PortfolioBtn from "../../atoms/portfolioBtn/portfolioBtn";
import ServicesHeaderText from "../../atoms/servicesHeaderText/servicesHeaderText";
import ServiceBoxDescription from "../../atoms/serviceBoxDescription/serviceBoxDescription";
import HeaderButton from "../../atoms/headerButton/headerButton";

export default function BlogsHeaderItemContainer({ textBtn, text, description, style, buttonText, styleText }) {
    return <div className="blogsHeaderItemContainer">
        <PortfolioBtn style={styleText} text={textBtn} />
        <ServicesHeaderText text={text} />
        <ServiceBoxDescription description={description} />
        <HeaderButton style={style} buttonText={buttonText} />
    </div>
}