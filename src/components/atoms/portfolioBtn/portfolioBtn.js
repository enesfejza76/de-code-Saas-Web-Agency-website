import React from "react";
import "./portfolioBtn.css";

export default function PortfolioBtn({ text, style }) {
    return <button style={style} className="portfolioBtn">{text}</button>
}
