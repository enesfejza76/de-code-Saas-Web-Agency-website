import React from "react";
import "./ideasText.css";

export default function IdeasText({ text, textSpan }) {
    return <h1 className="ideasText">{text} <span>{textSpan}</span></h1>
}