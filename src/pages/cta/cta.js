import Image from 'next/image';
import React from 'react';
import "./cta.css"

const CTA = () => {
    return (
        <section className="cta-container">
            <div className="cta-image">
                <Image
                    src="/cta/left.png"
                    alt="Left Image"
                    width={233}
                    height={350}
                    className="cta-limage"
                />
                <Image
                    src="/cta/middle.png"
                    alt="Middle Image"
                    width={412}
                    height={275}
                    className="cta-mimage"
                />
                <Image
                    src="/cta/right.png"
                    alt="Right Image"
                    width={263}
                    height={273}
                    className="cta-rimage"
                />
            </div>

            <h1 className="cta-title">Check Charterag off your bucket list</h1>

            <p className="cta-description">
                Lorem ipsum dolor sit amet consectetur.
                Tellus lectus non purus odio amet
            </p>

            <div className="cta-buttons">
                <button className="cta-ybutton">Explore</button>
                <button className="cta-wbutton">
                    Follow us
                    <span className="cta-icon">
                        <Image
                            src="/cta/social.png"
                            alt="Instagram Icon"
                            width={16}
                            height={16}
                        />
                    </span>
                </button>
            </div>
        </section>
    );
};

export default CTA;
