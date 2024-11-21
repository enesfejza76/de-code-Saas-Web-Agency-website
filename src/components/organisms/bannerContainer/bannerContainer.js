import React from "react";
import "./bannerContainer.css";
import BannerItemContainer from "../../molecules/bannerItemContainer/bannerItemContainer";

export default function BannerContainer({ text, description, textBtn, style }) {
    return <div className="bannerContainer">
        <BannerItemContainer
            text={text}
            description={description}
            textBtn={textBtn}
            style={style}
        />
    </div>
}