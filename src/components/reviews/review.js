"use client";
import React, { useEffect } from "react";
import Image from "next/image"; 

const Review = ({ imageSrc, name, stars, title, content }) => {
    return (
        <div className="review-card">
            <div className="review-header">
                <div className="review-image">
                    <Image src={imageSrc} alt={name} width={60} height={60} />
                </div>
                <div className="review-info">
                    <p className="review-name">{name}</p>
                    <div className="review-stars">
                        {Array(stars).fill("⭐")}
                    </div>
                </div>
            </div>
            <h3 className="review-title">{title}</h3>
            <p className="review-content">{content}</p>
        </div>
    );
};
export default Review;