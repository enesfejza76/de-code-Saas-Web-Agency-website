import React from "react";
import "./clientsRatingItemContainer.css";
import ClientsRating from "../../atoms/clientsRating/clientsRating";
import ClientsRatingStart from "../../atoms/clientsRatingStart/clientsRatingStart";
import ClientsRatingDescription from "../../atoms/clientsRatingDescription/clientsRatingDescription";

export default function ClientsRatingItemContainer({ text, description }) {
    return <div className="clientsRatingItemContainer">
        <ClientsRating text={text} />
        <ClientsRatingStart />
        <ClientsRatingDescription description={description} />
    </div>
}