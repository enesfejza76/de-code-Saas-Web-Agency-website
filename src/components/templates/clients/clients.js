import React from "react";
import "./clients.css";
import ClientsInfoImageSrc from "../../assets/images/Image Place Holder.png";
import ClientsContainer from "../../organisms/clientsContainer/clientsContainer";

export default function Clients() {
    return <div className="clients">
        <ClientsContainer text="Our Happy Clients" textBtn="Testiomonials" textRating="5.0" description="We tried several agencies before we found daCode. Has been a pleasure to work with and will soon start the next project with our second brand." src={ClientsInfoImageSrc} alt="Client Image" textInfo="Paulus Haverinen" descriptionInfo="Owner, Ikirakenne Ltd" />
    </div>
}