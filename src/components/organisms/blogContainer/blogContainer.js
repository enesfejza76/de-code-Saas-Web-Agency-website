import React from "react";
import "./blogContainer.css";
import BlogsHeaderItemContainer from "../../molecules/blogsHeaderItemContainer/blogsHeaderItemContainer";

export default function BlogContainer({ textBtn, text, description, style, buttonText, styleText }) {
    return <div className="blogContainer">
        <BlogsHeaderItemContainer text={text} textBtn={textBtn} description={description} style={style} buttonText={buttonText} styleText={styleText} />
    </div>
}