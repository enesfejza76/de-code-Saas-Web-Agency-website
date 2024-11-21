import React from "react";
import "./serviceHeaderContainer.css";
import ServicesHeaderText from "../../atoms/servicesHeaderText/servicesHeaderText";
import ServiceHeaderDescription from "../../atoms/serviceHeaderDescription/serviceHeaderDescription";

export default function ServiceHeaderContainer() {
    return <div className="serviceHeaderContainer">
        <ServicesHeaderText text="Our Services" />
        <ServiceHeaderDescription description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
tempor invidunt ut labore et."/>
    </div>
}