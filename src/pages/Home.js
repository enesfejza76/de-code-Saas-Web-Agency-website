import React from "react";
import Navbar from "../components/templates/navbar/navbar";
import Header from "../components/templates/header/header";
import Service from "../components/templates/service/service";
import Portfolio from "../components/templates/portfolio/portfolio";
import Ideas from "../components/templates/ideas/ideas";
import Banner from "../components/templates/banner/banner";
import Clients from "../components/templates/clients/clients";
import Blog from "../components/templates/blog/blog";
import Footer from "../components/templates/footer/footer";

export default function Home() {
    return <div className="container">
        <Navbar />
        <Header />
        <Service />
        <Portfolio />
        <Ideas />
        <Banner />
        <Clients />
        <Blog />
        <Footer />
    </div>
}