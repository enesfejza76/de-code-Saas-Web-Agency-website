import React from "react";
import "./blogsBoxImage.css";

export default function BlogsBoxImage({ src }) {
    return <img className="blogsBoxImage" src={src} alt="image" />
}