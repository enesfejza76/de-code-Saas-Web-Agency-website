import React from "react";
import "./onlinePresenceRightContainer.css";
import OnlinePresenceImg from "../../atoms/onlinePresenceImg/onlinePresenceImg";
import OnlinePresenceText from "../../atoms/onlinePresenceText/onlinePresenceText";

export default function OnlinePresenceRightContainer({ src }) {
    return <div className="onlinePresenceRightContainer">
        <OnlinePresenceText style={{
            color: "#60E1CB",
            fontSize: '36px'
        }}
            text="Schedule a free session"
        />
        <OnlinePresenceImg src={src} />
    </div>
}