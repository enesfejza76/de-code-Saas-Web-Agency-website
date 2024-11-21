import React from "react";
import "./onlinePresenceContainer.css";
import OnlinePresenceLeftContainer from "../../molecules/onlinePresenceLeftContainer/onlinePresenceLeftContainer";
import OnlinePresenceRightContainer from "../../molecules/onlinePresenceRightContainer/onlinePresenceRightContainer";
import OnlinePresenceImfSrc from "../../assets/images/image 1.png";

export default function OnlinePresenceContainer() {
    return <div className="onlinePresenceContainer">
        <OnlinePresenceLeftContainer text="Establishing online presence"
            description1="Every SaaS website, regardless of niche, must do one thing brilliantly, which is converting visitors into users. At first glance, the site should encourage and guide visitors in a smooth way towards call-to-actions. "
            description2="This goes hand in hand with a responsive design, meaning it needs to be apt for different devices. "
            description3="We use a data-driven approach to measure user response when developing the site. This method usually makes the site quicker to launch, is more cost-effective and more successful in the long run."
            description4="The pages need to be search engine optimized (SEO) because it lays the foundation for the technical quality, which in turn determines how high it will rank among search results. We also make sure that your website is indexed properly."
        />
        <OnlinePresenceRightContainer src={OnlinePresenceImfSrc} />
    </div>
}