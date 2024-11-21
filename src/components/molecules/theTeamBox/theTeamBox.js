import React from "react";
import "./theTeamBox.css";
import TheTeamImage from "../../atoms/theTeamImage/theTeamImage";
import TheTeamTitle from "../../atoms/theTeamTitle/theTeamTitle";
import TheTeamDescription from "../../atoms/theTeamDescription/theTeamDescription";
import TheTeamButton from "../../atoms/theTeamButton/theTeamButton";

export default function TheTeamBox({ title, description, buttonText }) {
    return <div className="theTeamBox">
        <TheTeamImage />
        <TheTeamTitle title={title} />
        <TheTeamDescription description={description} />
        <TheTeamButton buttonText={buttonText} />
    </div>
}