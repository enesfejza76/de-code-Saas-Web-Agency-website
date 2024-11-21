import React from "react";
import "./bannerItemContainer.css";
import BannerText from "../../atoms/bannerText/bannerText";
import BannerDescription from "../../atoms/bannerDescription/bannerDescription";
import BannerBtn from "../../atoms/bannerBtn/bannerBtn";

export default function BannerItemContainer({ text, description, textBtn, style }) {
    return <div className="bannerItemContainer">
        <BannerText text={text} />
        <BannerDescription description={description} />
        <BannerBtn style={style} textBtn={textBtn} />
    </div>
}