import React from "react";
import "./navbarLink.css"
import { Link } from "react-router-dom";

export default function NavbarLink() {
    return <ul className="headerLink">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/TheTeam">The Team</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
    </ul>
}