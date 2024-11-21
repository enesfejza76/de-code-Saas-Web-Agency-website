import React from "react";
import "./headerTextContainer.css";
import HeaderText from "../../atoms/headerText/headerText";
import HeaderDescription from "../../atoms/headerDescription/headerDescription";
import HeaderButton from "../../atoms/headerButton/headerButton";

export default function HeaderTextContainer() {
    return <div className="headerTextContainer">
        <HeaderText />
        <HeaderDescription />
        <div className="headerTextButtonContainer">
            <HeaderButton
                buttonText="Get Started"
                style={{
                    backgroundColor: "#60E1CB",
                    color: "white",
                    border: "#60E1CB"
                }}
            />
            <HeaderButton
                buttonText="Contact us"
                style={{
                    backgroundColor: "white",
                    color: "#60E1CB",
                    border: "1px solid #07003B2B"
                }}
            />
        </div>
    </div>
}