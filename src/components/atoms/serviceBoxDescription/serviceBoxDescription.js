import React from "react";
import "./serviceBoxDescription.css";

export default function ServiceBoxDescription({ description, style }) {
    return <p style={style} className="serviceBoxDescription">{description}</p>
}