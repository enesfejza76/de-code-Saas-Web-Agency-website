import React from "react";
import "./blogBoxesItemContainer.css";
import ServiceBoxText from "../../atoms/serviceBoxText/serviceBoxText";
import ServiceBoxDescription from "../../atoms/serviceBoxDescription/serviceBoxDescription";
import ServiceBoxReadMoreBtn from "../../atoms/serviceBoxReadMoreBtn/serviceBoxReadMoreBtn";

export default function BlogBoxesItemContainer({ text, description }) {
    return <div className="blogBoxesItemContainer">
        <ServiceBoxText text={text} />
        <ServiceBoxDescription description={description} />
        <ServiceBoxReadMoreBtn />
    </div>
}