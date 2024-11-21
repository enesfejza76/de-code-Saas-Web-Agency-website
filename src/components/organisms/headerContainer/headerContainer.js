import React from "react";
import "./headerContainer.css";
import HeaderTextContainer from "../../molecules/headerTextContainer/headerTextContainer";
import HeaderImgContainer from "../../molecules/headerImgContainer/headerImgContainer";

export default function HeaderContainer() {
    return <div className="headerContainer">
        <HeaderTextContainer />
        <HeaderImgContainer />
    </div>
}