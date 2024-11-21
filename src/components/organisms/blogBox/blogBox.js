import React from "react";
import "./blogBox.css";
import BlogBoxContainer from "../../molecules/blogBoxContainer/blogBoxContainer";
import ImageBlogBox1 from "../../assets/images/Image.png";
import ImageBlogBox2 from "../../assets/images/Mask(6).png";
import ImageBlogBox3 from "../../assets/images/Mask.png";
import ImageBlogBox4 from "../../assets/images/Mask (1).png";
import ImageBlogBox5 from "../../assets/images/Mask (2).png";
import ImageBlogBox6 from "../../assets/images/Mask (3).png";
import ImageBlogBox7 from "../../assets/images/Mask (4).png";
import ImageBlogBox8 from "../../assets/images/Mask (5).png";

export default function BlogBox() {
    return <div className="blogBox">
        <BlogBoxContainer src={ImageBlogBox1} title="Do millennials care about saving?" description="Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna." />
        <BlogBoxContainer src={ImageBlogBox2} title="Do millennials care about saving?" description="Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna." />
        <BlogBoxContainer src={ImageBlogBox3} title="Do millennials care about saving?" description="Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna." />
        <BlogBoxContainer src={ImageBlogBox4} title="Do millennials care about saving?" description="Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna." />
        <BlogBoxContainer src={ImageBlogBox5} title="Do millennials care about saving?" description="Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna." />
        <BlogBoxContainer src={ImageBlogBox6} title="Do millennials care about saving?" description="Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna." />
        <BlogBoxContainer src={ImageBlogBox7} title="Do millennials care about saving?" description="Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna." />
        <BlogBoxContainer src={ImageBlogBox8} title="Do millennials care about saving?" description="Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna." />
    </div>
}