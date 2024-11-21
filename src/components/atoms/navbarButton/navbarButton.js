import React from "react";
import "./navbarButton.css";

export default function NavbarButton({ text }) {
    return <button className="buttonNavbar">
        {text}
    </button>
}