import React from "react";
import "./bannerBtn.css";

export default function BannerBtn({ textBtn, style }) {
    return <button style={style} className="bannerBtn">{textBtn}</button>
}