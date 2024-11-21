import React from "react";
import "./banner.css";
import BannerContainer from "../../organisms/bannerContainer/bannerContainer";

export default function Banner() {
    return <div className="banner">
        <BannerContainer
            text="Interested to work with us ?"
            description="Send a line here get and update daily"
            textBtn="DaCode@example.com"
        />
    </div>
}