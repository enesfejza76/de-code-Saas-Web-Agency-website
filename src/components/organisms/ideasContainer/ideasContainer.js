import React from "react";
import "./ideasContainer.css";
import IdeasItemContainer from "../../molecules/ideasItemContainer/ideasItemContainer";

export default function IdeasContainer() {
    return <div className="ideasContainer">
        <IdeasItemContainer
            text="Your idea into"
            textSpan="reality"
            textBtn1="1"
            textMini1="Your Ideas"
            textBtn2="2"
            textMini2="Strategy meeting"
            textBtn3="3"
            textMini3="Agile and Scrum framework"
            textBtn4="4"
            textMini4="Your website goes live"
        />
    </div>
}