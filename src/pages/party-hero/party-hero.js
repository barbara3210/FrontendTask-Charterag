import React from 'react';
import Image from 'next/image';
import PartyCard from '../../components/cards/party-card';
import './party-hero.css';

const PartyHero = () => {
    return (
        <div className="party-hero-container">
            <section className="party-hero-section">
                <div className="party-hero-image">
                    <Image
                        src="/routes/party-route.png"
                        alt='party-route'
                        layout="fill"
                        objectFit="cover"
                        className="hero-image"
                    />
                    <div className="party-image-mask"></div>
                </div>

                <div className="party-title-section">
                    <div className="party-small-text">PARTY ROUTE</div>
                    <div className="party-big-title">The best stories are yet to be told</div>
                </div>

                <div className="party-paragraphs">
                    <p className="party-paragraph1">
                        From mountains and canyons to fjord-like bays, nostalgic old towns to most stunning beaches. Get to now Croatia’s twin sister – Montenegro
                    </p>
                    <p className="party-paragraph2">
                        Walk the medieval streets of Kotor, dine the most amazing seafood in the Fishermans village. Feel like a millionaire in Porto Montenegro, the most luxurious marina in this part of the World. Visit nostalgic old towns Perast, Risan and Herceg Novi. Hike mountains in Kotor. Get wild in Budva and Tivat. Relax in freshly opened, chic Lazure marina.
                    </p>
                </div>

                <div className="party-card-wrapper">
                    <PartyCard />
                </div>
            </section>
        </div>
    );
};

export default PartyHero;
