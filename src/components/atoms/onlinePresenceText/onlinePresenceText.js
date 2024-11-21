import React from "react";
import "./onlinePresenceText.css";

export default function OnlinePresenceText({ text, style }) {
    return <h4 style={style} className="onlinePresenceText">{text}</h4>
}