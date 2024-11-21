import React from "react";
import "./footerHeaderContainer.css";
import FooterHeadingText from "../../atoms/footerHeadingText/footerHeadingText";
import FooterHeadingDescription from "../../atoms/footerHeadingDescription/footerHeadingDescription";

export default function FooterHeaderContainer({ footerHeaderText, footerHeadingDescription }) {
    return <div className="footerHeaderContainer">
        <FooterHeadingText footerHeaderText={footerHeaderText} />
        <FooterHeadingDescription footerHeadingDescription={footerHeadingDescription} />
    </div>
}