import React from "react";
import "./footerLink.css";
import { Link } from "react-router-dom";

export default function FooterLink({ footerLink, footerLinkText }) {
    return <Link to={footerLink}>{footerLinkText}</Link>
}