import React from "react";
import "./navbarContainer.css";
import NavbarLogoImgContainer from "../../molecules/navbarLogoImgContainer/navbarLogoImgContainer";
import NavbarLinkButtonContainer from "../../molecules/navbarLinkButtonContainer/navbarLinkButtonContainer";

export default function NavbarContainer() {
    return <div className="navbarContainer">
        <NavbarLogoImgContainer />
        <NavbarLinkButtonContainer />
    </div>
}