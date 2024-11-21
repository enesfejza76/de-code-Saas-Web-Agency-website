import React from "react";
import "./blogBoxContainer.css";
import BlogsBoxImage from "../../atoms/blogsBoxImage/blogsBoxImage";
import BlogsBoxTitle from "../../atoms/blogsBoxTitle/blogsBoxTitle";
import BlogsBoxDescription from "../../atoms/blogsBoxDescription/blogsBoxDescription";

export default function BlogBoxContainer({ src, title, description }) {
    return <div className="blogBoxContainer">
        <div className="blogBoxContainerImage">
            <BlogsBoxImage src={src} />
        </div>
        <BlogsBoxTitle title={title} />
        <BlogsBoxDescription description={description} />
    </div>
}