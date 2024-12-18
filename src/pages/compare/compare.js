"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SectionBlock from '../../components/section/section-block.js';
import Image from 'next/image';
import './compare.css';

const Compare = () => {

    useEffect(() => {
        gsap.to('.compare-page', { opacity: 1, duration: 1 });
        gsap.to('.compare-card', { opacity: 1, duration: 1, stagger: 0.5 });
        gsap.to('.frame', { opacity: 1, duration: 1, delay: 1.5 });  
    }, []);

    return (
        <div className="compare-page">
            <SectionBlock
                label="payment"
                title="You don’t have to break the bank"
                content="See how lorem ipsum dolor sit"
                labelColor="#062949"
                labelColorBack="#D6E6ED"
                titleColor="#062949"
                contentColor="#4A4E4C"
            />

            <div className="compare-cards">
                <div className="compare-card left-card">
                    <h3 className="card-title">Sailweek experience</h3>
                    <div className="frame">
                        <span className="frame-text">from 787€</span>
                    </div>
                    <ul className="card-features">
                        <li>
                            <Image 
                                src="/icons/check-badge.png" 
                                alt="Check" 
                                width={20}  
                                height={20}
                            />
                            experience
                        </li>
                        <li>
                            <Image 
                                src="/icons/check-badge.png" 
                                alt="Check" 
                                width={20}
                                height={20}
                            />
                            lorem ipsum dolor
                        </li>
                        <li>
                            <Image 
                                src="/icons/check-badge.png" 
                                alt="Check" 
                                width={20}
                                height={20}
                            />
                            dolor sit et
                        </li>
                        <li>
                            <Image 
                                src="/icons/check-badge.png" 
                                alt="Check" 
                                width={20}
                                height={20}
                            />
                            lorem ipsum dolor
                        </li>
                        <li>
                            <Image 
                                src="/icons/check-badge.png" 
                                alt="Check" 
                                width={20}
                                height={20}
                            />
                            et santi dolor sum
                        </li>
                        <li>
                            <Image 
                                src="/icons/check-badge.png" 
                                alt="Check" 
                                width={20}
                                height={20}
                            />
                            ipsum lorem dolor sit et
                        </li>
                    </ul>
                </div>

                <div className="compare-card" style={{ background: "#FFF" }}>
                    <h3 className="card-title">Individual experience</h3>
                    <ul className="card-features">
                        <li>
                            <Image 
                                src="/icons/check-badge.png" 
                                alt="Check" 
                                width={20}
                                height={20}
                            />
                            experience
                        </li>
                        <li>
                            <Image 
                                src="/icons/check-badge.png" 
                                alt="Check" 
                                width={20}
                                height={20}
                            />
                            lorem ipsum dolor
                        </li>
                        <li>
                            <Image 
                                src="/icons/check-badge-gray.png" 
                                alt="Check" 
                                width={20}
                                height={20}
                            />
                            dolor sit et
                        </li>
                        <li>
                            <Image 
                                src="/icons/check-badge-gray.png" 
                                alt="Check" 
                                width={20}
                                height={20}
                            />
                            lorem ipsum dolor
                        </li>
                        <li>
                            <Image 
                                src="/icons/check-badge-gray.png" 
                                alt="Check" 
                                width={20}
                                height={20}
                            />
                            et santi dolor sum
                        </li>
                        <li>
                            <Image 
                                src="/icons/check-badge-gray.png" 
                                alt="Check" 
                                width={20}
                                height={20}
                            />
                            ipsum lorem dolor sit et
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Compare;
