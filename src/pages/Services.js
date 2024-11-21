import React from "react";
import Navbar from "../components/templates/navbar/navbar";
import Banner from "../components/templates/banner/banner";
import SecondBanner from "../components/templates/secondBanner/secondBanner";
import Service from "../components/templates/service/service";
import OnlinePresence from "../components/templates/onlinePresence/onlinePresence";
import Footer from "../components/templates/footer/footer";

export default function Services() {
    return <div className="container">
        <Navbar />
        <SecondBanner
            text="What we can offer your SaaS Business"
            description="We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to our clients. Our team has worked with Nordic, European and American tech unicorns."
        />
        <Service />
        <Banner />
        <OnlinePresence />
        <Footer />
    </div>
}