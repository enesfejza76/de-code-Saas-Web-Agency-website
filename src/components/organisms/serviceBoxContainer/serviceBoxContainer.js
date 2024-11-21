import React from "react";
import "./serviceBoxContainer.css";
import WordPressSiteIcon from "../../assets/images/web-site.png";
import WordPressPluginIcon from "../../assets/images/wordpress.png";
import WebDesignIcon from "../../assets/images/web-design.png";
import WordPressSiteOptimizationIcon from "../../assets/images/magnifying-glass.png";
import SearchEngineOptimizationIcon from "../../assets/images/startup.png";
import CrossPlatformMobileAppIcon from "../../assets/images/layers.png"
import ServiceBoxItemContainer from "../../molecules/serviceBoxItemContainer/serviceBoxItemContainer";

export default function ServiceBoxContainer() {
    return <div className="serviceBoxContainer">
        <ServiceBoxItemContainer text="WordPress Site" serviceBoxIcon={WordPressSiteIcon} />
        <ServiceBoxItemContainer text="WordPress Plugin" serviceBoxIcon={WordPressPluginIcon} />
        <ServiceBoxItemContainer text="Website Redesign" serviceBoxIcon={WebDesignIcon} />
        <ServiceBoxItemContainer text="WordPress Site Optimization" serviceBoxIcon={WordPressSiteOptimizationIcon} />
        <ServiceBoxItemContainer text="Search Engine Optimization" serviceBoxIcon={SearchEngineOptimizationIcon} />
        <ServiceBoxItemContainer text="Cross Platform Mobile App" serviceBoxIcon={CrossPlatformMobileAppIcon} />
    </div>
}