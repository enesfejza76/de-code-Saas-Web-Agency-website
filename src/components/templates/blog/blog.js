import React from "react";
import "./blog.css";
import BlogContainer from "../../organisms/blogContainer/blogContainer";
import BlogBoxesContainer from "../../organisms/blogBoxesContainer/blogBoxesContainer";

export default function Blog() {
    return <div className="blog">
        <BlogContainer textBtn="News & Articles" text="DaCode Blog" description="On daCode blog we will review the latest in web development for the SaaS-, tech- and crypto industry." buttonText="See all" style={{
            backgroundColor: "transparent",
            color: "#7BC0E3",
            border: "1px solid #7BC0E3",
            width: "154px",
            height: "55.22px",
        }} styleText={{
            width: "110px"
        }} />
        <div className="blogBoxesContainerContain">
            <BlogBoxesContainer text="Why Your SaaS Business should use WordPress" description="A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort" />
            <BlogBoxesContainer text="Why Your SaaS Business should use WordPress" description="A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort" />
        </div>
    </div>
}