"use client"
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import "./highlights.css"

export default function Highlights() {
    const list = [
        {
            title: "Fjord Like Bays",
            img: "/highlights/highlight1.png",
            description: "Where the sea meets the mountains. Sail the Bay of Kotor, often called Europe’s most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.",
        },
        {
            title: "Nostalgic Coastal Towns",
            img: "/highlights/highlight2.png",
            description: "Perast, Kotor, Tivat, Budva, Sveti Stefan…Montenegro is full of traditional Mediterranean coastal towns where locals still live with nature. Sustainable tourism, local way of life, and world-famous Montenegrin hospitality.",
        },
        {
            title: "Beach Parties",
            img: "/highlights/highlight3.png",
            description: "Summer Vibes at its best. The most amazing Montenegrin beaches, cocktails, and live DJs. Dance the night away.",
        },
        {
            title: "Wellness Oasis",
            img: "/highlights/highlight4.png",
            description: "Relax and enjoy swimming pool area, gym, yoga, massages, and saunas in the freshly opened, chic Lazure Marina. This traditional marina has everything you wish for, from fine dining restaurants to burger bars, cocktails, and freshly squeezed fruit stands. Celebrate traditional Montenegrin hospitality and freshness of local produce.",
        },
        {
            title: "Charterag Regatta",
            img: "/highlights/highlight5.png",
            description: "Is there anything better than sailing and having fun with your mates? Get behind the helm, pull ropes, switch sides, and most importantly, have fun. On SailWeek, there are no losers. Everybody wins!!!",
        },
        {
            title: "Spectacular Mountain Views",
            img: "/highlights/highlight6.png",
            description: "Hike the peak of Lovcen mountain or catch a taxi to the top, for the most spectacular view of the surrounding mountains, postcard-perfect cliffs, and romantic bays.",
        },
    ];

    return (
        <div className="highlights-container">
            <div className="highlights-title">
                Route Highlights
            </div>

            <div className="highlights-grid">
                {list.map((item, index) => (
                    <Card
                        key={index}
                        isPressable
                        shadow="sm"
                        onPress={() => console.log("item pressed")}
                        className="highlight-card"
                    >
                        <CardBody className="highlight-card-body">
                            <Image
                                alt={item.title}
                                className="highlight-card-image"
                                radius="lg"
                                shadow="sm"
                                src={item.img}
                                width="100%"
                                height="140px"
                            />
                        </CardBody>
                        <CardFooter className="highlight-card-footer">
                            <div className="highlight-text-container">
                                <div className="highlight-card-title">
                                    <b>{item.title}</b>
                                </div>
                                <div className="highlight-card-description">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
