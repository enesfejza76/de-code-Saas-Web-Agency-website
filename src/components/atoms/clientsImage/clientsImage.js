import React from "react";
import "./clientsImage.css";

export default function ClientsImage({ src, alt }) {
    return <img className="clientsImage" src={src} alt={alt} />
}