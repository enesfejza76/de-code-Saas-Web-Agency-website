import React from "react";
import "./secondBanner.css";
import BannerContainer from "../../organisms/bannerContainer/bannerContainer";

export default function SecondBanner({ text, description }) {
    return <div className="secondBanner">
        <BannerContainer
            text={text}
            description={description}
            textBtn=""
            style={{
                display: "none"
            }}
        />
    </div>
}