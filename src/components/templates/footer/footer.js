import React from "react";
import "./footer.css";
import FooterContainer from "../../organisms/footerContainer/footerContainer";

export default function Footer() {
    return <div className="footer">
        <FooterContainer footerHeaderText="Logo" footerHeadingDescription="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" footerLink="/" />
    </div>
}