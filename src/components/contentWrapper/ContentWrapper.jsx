import React from "react";
import "./style.scss";
// This contentWrapper components made all div into the center mainly
const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;