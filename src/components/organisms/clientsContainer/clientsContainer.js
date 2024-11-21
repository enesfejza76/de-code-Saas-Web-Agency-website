import React from "react";
import "./clientsContainer.css";
import ClientsHeaderContainer from "../../molecules/clientsHeaderContainer/clientsHeaderContainer";
import ClientsRatingItemContainer from "../../molecules/clientsRatingItemContainer/clientsRatingItemContainer";
import ClientsInfo from "../../molecules/clientsInfo/clientsInfo";

export default function ClientsContainer({ textBtn, text, textRating, description, src, alt, textInfo, descriptionInfo }) {
    return <div className="clientsContainer">
        <ClientsHeaderContainer textBtn={textBtn} text={text} />
        <ClientsRatingItemContainer text={textRating} description={description} />
        <ClientsInfo src={src} alt={alt} text={textInfo} description={descriptionInfo} />
    </div>
}