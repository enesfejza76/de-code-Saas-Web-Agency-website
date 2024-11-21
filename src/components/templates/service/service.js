import React from "react";
import "./service.css";
import ServiceContainer from "../../organisms/serviceContainer/serviceContainer";
import ServiceBoxContainer from "../../organisms/serviceBoxContainer/serviceBoxContainer";

export default function Service() {
    return <div className="service">
        <ServiceContainer />
        <ServiceBoxContainer />
    </div>
}