import React from "react";
import Navbar from "../components/templates/navbar/navbar";
import SecondBanner from "../components/templates/secondBanner/secondBanner";
import BlogBoxContainerOutter from "../components/templates/blogBoxContainer/blogBoxContainerOutter";
import Footer from "../components/templates/footer/footer";

export default function Blog() {
    return <div className="container">
        <Navbar />
        <SecondBanner
            text="News & Articles"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et."
        />
        <BlogBoxContainerOutter />
        <Footer />
    </div>
}