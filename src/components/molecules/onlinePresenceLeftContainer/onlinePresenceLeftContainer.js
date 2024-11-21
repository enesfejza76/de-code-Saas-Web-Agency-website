import React from "react";
import "./onlinePresenceLeftContainer.css";
import OnlinePresenceText from "../../atoms/onlinePresenceText/onlinePresenceText";
import OnlinePresenceDescription from "../../atoms/onlinePresenceDescription/onlinePresenceDescription";

export default function OnlinePresenceLeftContainer({ text,
    description1,
    description2,
    description3,
    description4,
    style
}) {
    return <div className="onlinePresenceLeftContainer">
        <OnlinePresenceText text={text} style={style} />
        <OnlinePresenceDescription description={description1} />
        <OnlinePresenceDescription description={description2} />
        <OnlinePresenceDescription description={description3} />
        <OnlinePresenceDescription description={description4} />
    </div>
}