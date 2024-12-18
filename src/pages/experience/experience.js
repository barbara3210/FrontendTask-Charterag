import React from "react";
import Ratings from "../../components/rating/ratings";
import SectionBlock from "../../components/section/section-block";
import "./experience.css";

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="ratings-section">
                <Ratings />
            </div>
            <div style={{ color: "#F4FAFF", padding: "40px" }}>
                <SectionBlock
                    label="Welcome"
                    title="What is Charterag experience"
                    content="Join us for a week of sailing, unique adventures and exclusive parties in stunning locations. Explore new places daily. Dive into local culture. Dance the nights away. Leave with new friends and lifelong memories."
                    labelColor="#FFF"
                    labelColorBack="#103C63"
                    titleColor="#FFF"
                    contentColor="#FFF"
                />
            </div>
            <div className="cards-section">
                <div className="card">
                    <h3>Sail</h3>
                    <img src="/experience/experience1.png" alt="Sail" />
                </div>
                <div className="card">
                    <h3>Party</h3>
                    <img src="/experience/experience2.png" alt="Party" />
                </div>
                <div className="card">
                    <h3>Explore</h3>
                    <img src="/experience/experience3.png" alt="Explore" />
                </div>
                <div className="card">
                    <h3>Relax</h3>
                    <img src="/experience/experience4.png" alt="Relax" />
                </div>
            </div>
        </div>
    );
};

export default Experience;
