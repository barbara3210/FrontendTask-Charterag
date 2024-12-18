import React from "react";
import Ratings from "../../components/rating/ratings";
import SectionBlock from "../../components/section/section-block";
import Image from "next/image"; // Importanje Image komponente iz Next.js
import "./experience.css";

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="ratings-section">
                <Ratings />
            </div>
            <div className="section-block-wrapper-custom">
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
                    <Image src="/experience/experience1.png" alt="Sail" width={500} height={300} />
                </div>
                <div className="card">
                    <h3>Party</h3>
                    <Image src="/experience/experience2.png" alt="Party" width={500} height={300} />
                </div>
                <div className="card">
                    <h3>Explore</h3>
                    <Image src="/experience/experience3.png" alt="Explore" width={500} height={300} />
                </div>
                <div className="card">
                    <h3>Relax</h3>
                    <Image src="/experience/experience4.png" alt="Relax" width={500} height={300} />
                </div>
            </div>
        </div>
    );
};

export default Experience;
