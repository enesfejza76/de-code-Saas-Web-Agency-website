import React from "react";
import "./headerButton.css";

export default function HeaderButton({ style, buttonText }) {
    return <button style={style} className="headerButton">
        {buttonText}
    </button>
}