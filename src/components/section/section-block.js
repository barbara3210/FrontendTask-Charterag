import React from "react";

import "./section.css";

const SectionBlock = ({ label, title, content, labelColor,labelColorBack, titleColor, contentColor }) => {
    return (
        <div className="section-container">
            <div className="section-label" style={{ color: labelColor, backgroundColor: labelColorBack }}>{label}</div>
            <h2 className="section-title" style={{ color: titleColor }}>{title}</h2>
            <p className="section-content" style={{ color: contentColor }}>{content}</p>
        </div>
    );
};



export default SectionBlock;
