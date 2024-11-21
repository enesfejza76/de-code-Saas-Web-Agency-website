import React from "react";
import "./ideasItemContainer.css";
import IdeasText from "../../atoms/ideasText/ideasText";
import HeaderDescription from "../../atoms/headerDescription/headerDescription";
import IdeasBtn from "../../atoms/ideasBtn/ideasBtn";
import IdeasTextMini from "../../atoms/IdeasTextMini/IdeasTextMini";

export default function IdeasItemContainer({ text, textSpan, textBtn1, textBtn2, textBtn3, textBtn4, textMini1, textMini2, textMini3, textMini4 }) {
    return <div className="ideasItemContainer">
        <IdeasText text={text} textSpan={textSpan} />
        <HeaderDescription />
        <div className="ideasItemContainerRow">
            <IdeasBtn text={textBtn1} />
            <div className="ideasItemContainerRowSecond">
                <IdeasTextMini text={textMini1} />
                <HeaderDescription />
            </div>
        </div>
        <div className="ideasItemContainerRow">
            <IdeasBtn text={textBtn2} />
            <div className="ideasItemContainerRowSecond">
                <IdeasTextMini text={textMini2} />
                <HeaderDescription />
            </div>
        </div>
        <div className="ideasItemContainerRow">
            <IdeasBtn text={textBtn3} />
            <div className="ideasItemContainerRowSecond">
                <IdeasTextMini text={textMini3} />
                <HeaderDescription />
            </div>
        </div>
        <div className="ideasItemContainerRow">
            <IdeasBtn text={textBtn4} />
            <div className="ideasItemContainerRowSecond">
                <IdeasTextMini text={textMini4} />
                <HeaderDescription />
            </div>
        </div>
    </div>
}