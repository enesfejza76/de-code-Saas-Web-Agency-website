import React from "react";
import "./blogBoxesContainer.css";
import BlogBoxesItemContainer from "../../molecules/blogBoxesItemContainer/blogBoxesItemContainer";

export default function BlogBoxesContainer({ text, description }) {
    return <div className="blogBoxesContainer">
        <BlogBoxesItemContainer text={text} description={description} />
    </div>
}