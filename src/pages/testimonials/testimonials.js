"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Review from "../../components/reviews/review";
import "./testimonials.css";

gsap.registerPlugin(Draggable);

const Testimonials = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const reviews = container.children; 
        const containerWidth = reviews.length * (500+20);


        gsap.set(container, { width: containerWidth });

        Draggable.create(container, {
            type: "x", 
            inertia: true, 
            dragResistance: 0.2, 
            edgeResistance: 0.7, 
            onDragEnd: function () {
                const snap = Math.round(this.x / -520) * -520; 
                gsap.to(this.target, { x: snap, duration: 0.5, ease: "power2.out" });
            },
        });

        gsap.set(container, { x: 0 });
    }, []);

    return (
        <div className="testimonials-container">
            <div className="gradient-overlay"></div>
            <div className="background-image"></div>

            <div className="testimonials-content">
                <h2 className="testimonials-title">Our guests loved it!</h2>

                <div className="reviews-container" ref={containerRef}>
                    <Review
                        imageSrc="/testimonials/avatar/avatar.png"
                        name="Courtney Henry"
                        stars={5}
                        title="Amazing experience"
                        content="I got a lovely experience with Charterag Split and Vedran in particular, he not only provided me all information I needed, but also found the best price option for my dates."
                    />
                    <Review
                        imageSrc="/testimonials/avatar/avatar2.png"
                        name="Luca Bettanin"
                        stars={5}
                        title="Great vacation"
                        content="They did a very good job organizing a charter for us for a week. Everything was flawless and the skipper they found for us was amazing (ask for Luka). Would charter from them again!"
                    />
                    <Review
                        imageSrc="/testimonials/avatar/avatar1.png"
                        name="John Doe"
                        stars={5}
                        title="Such a wonderful experience"
                        content="I could not have been happier to have used this service. 100% satisfied. Excellent communication, always prompt and accurate. Truly a seamless experience."
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
