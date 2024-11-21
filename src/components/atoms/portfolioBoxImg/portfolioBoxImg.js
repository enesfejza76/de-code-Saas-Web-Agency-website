import React from "react";
import "./portfolioBoxImg.css";

export default function PortfolioBoxImg({ src, alt }) {
    return <img className="portfolioBoxImg" src={src} alt={alt} />

}