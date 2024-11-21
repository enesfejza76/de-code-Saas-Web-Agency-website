import React from "react";
import Navbar from "../components/templates/navbar/navbar";
import TheTeam from "../components/templates/theTeam/theTeam";
import SecondBanner from "../components/templates/secondBanner/secondBanner";
import Footer from "../components/templates/footer/footer";

export default function TheTeamPage() {
    return <div className="test">
        <Navbar />
        <SecondBanner text="The Team" description="Our team members have over 15 years of experience within web development, SEO, content and design. We have an extensive portfolio of working with different companies and projects from various parts of the world." />
        <TheTeam />
        <Footer />
    </div>
}