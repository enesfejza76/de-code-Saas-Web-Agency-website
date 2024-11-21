import React from "react";
import "./navbarLinkButtonContainer.css";
import NavbarLink from "../../atoms/navbarLink/navbarLink";
import NavbarButton from "../../atoms/navbarButton/navbarButton";

export default function NavbarLinkButtonContainer() {
    return <div className="navbarLinkButtonContainer">
        <NavbarLink />
        <NavbarButton text="Request a quote" />
    </div>
}