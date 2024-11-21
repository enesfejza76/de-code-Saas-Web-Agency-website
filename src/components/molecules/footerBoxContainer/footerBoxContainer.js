import React from "react";
import "./footerBoxContainer.css";
import FooterLinkText from "../../atoms/footerLinkText/footerLinkText";
import FooterLink from "../../atoms/footerLink/footerLink";

export default function FooterBoxContainer({ footerLinkTextTitle, footerLink,
    footerLinkText1,
    footerLinkText2,
    footerLinkText3 }) {
    return <div className="footerBoxContainer">
        <FooterLinkText footerLinkTextTitle={footerLinkTextTitle} />
        <FooterLink footerLink={footerLink} footerLinkText={footerLinkText1} />
        <FooterLink footerLink={footerLink} footerLinkText={footerLinkText2} />
        <FooterLink footerLink={footerLink} footerLinkText={footerLinkText3} />
    </div>
}