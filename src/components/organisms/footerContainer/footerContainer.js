import React from "react";
import "./footerContainer.css";
import FooterHeaderContainer from "../../molecules/footerHeaderContainer/footerHeaderContainer";
import FooterBoxContainer from "../../molecules/footerBoxContainer/footerBoxContainer";

export default function FooterContainer({ footerHeaderText, footerHeadingDescription, footerLinkTextTitle, footerLink,
    footerLinkText1,
    footerLinkText2,
    footerLinkText3 }) {
    return <div className="footerContainer">
        <FooterHeaderContainer footerHeaderText={footerHeaderText} footerHeadingDescription={footerHeadingDescription} />
        <div className="footerLinkContainer">
            <FooterBoxContainer footerLinkTextTitle="Work" footerLink={footerLink}
                footerLinkText1="Blog"
                footerLinkText2="How we work"
                footerLinkText3="Testimonials"
            />
            <FooterBoxContainer footerLinkTextTitle="Services" footerLink={footerLink}
                footerLinkText1="Marketing Strategy"
                footerLinkText2="Website Optimization"
                footerLinkText3="Email Maerketing"
            />
            <FooterBoxContainer footerLinkTextTitle="BusinessSolution" footerLink={footerLink}
                footerLinkText1="Partnership"
                footerLinkText2="About Project"
                footerLinkText3="Corporate"
            />
            <FooterBoxContainer footerLinkTextTitle="Language" footerLink={footerLink} />
        </div>
    </div>
}