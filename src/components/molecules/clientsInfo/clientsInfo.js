import React from "react";
import "./clientsInfo.css";
import ClientsImage from "../../atoms/clientsImage/clientsImage";
import ClientsName from "../../atoms/clientsName/clientsName";
import ClientsDescription from "../../atoms/clientsDescription/clientsDescription";

export default function ClientsInfo({ src, alt, text, description }) {
    return <div className="clientsInfo">
        <ClientsImage src={src} alt={alt} />
        <ClientsName text={text} />
        <ClientsDescription description={description} />
    </div>
}