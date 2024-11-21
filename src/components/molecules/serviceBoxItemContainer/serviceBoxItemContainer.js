import React from "react";
import "./serviceBoxItemContainer.css";
import ServiceBoxIcon from "../../atoms/serviceBoxIcon/serviceBoxIcon";
import ServiceBoxText from "../../atoms/serviceBoxText/serviceBoxText";
import ServiceBoxDescription from "../../atoms/serviceBoxDescription/serviceBoxDescription";
import ServiceBoxReadMoreBtn from "../../atoms/serviceBoxReadMoreBtn/serviceBoxReadMoreBtn";

export default function ServiceBoxItemContainer({ text, serviceBoxIcon }) {
    return <div className="serviceBoxItemContainer">
        <ServiceBoxIcon src={serviceBoxIcon} alt="Wordpress site icon" />
        <ServiceBoxText text={text} />
        <ServiceBoxDescription description="Lorem ipsum dolor sit amet,
consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut " />
        <ServiceBoxReadMoreBtn />
    </div>
}