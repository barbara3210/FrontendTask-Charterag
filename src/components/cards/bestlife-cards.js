"use client";
import { Card, CardBody, Image } from "@nextui-org/react";
import "./bestlife-cards.css";

export default function BestLifeCards() {
    const list = [
        { img: "/best_life/Rectangle1.png" },
        { img: "/best_life/Rectangle2.png" },
        { img: "/best_life/Rectangle3.png" },
        { img: "/best_life/Rectangle4.png" },
        { img: "/best_life/Rectangle5.png" },
        { img: "/best_life/Rectangle6.png" },
        { img: "/best_life/Rectangle7.png" },
        { img: "/best_life/Rectangle8.png" },
    ];

    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <g clipPath="url(#clip0_1_1453)">
                        <path d="M1.29962 24.6552C3.01499 24.8672 4.73455 24.295 5.97947 23.0981C6.87606 24.0894 8.15139 24.6552 9.48935 24.6552C10.8273 24.6552 12.1026 24.0894 12.9992 23.0981C13.8958 24.0894 15.1712 24.6552 16.5091 24.6552C17.8471 24.6552 19.1224 24.0894 20.019 23.0981C21.2639 24.295 22.9835 24.8672 24.6988 24.6552" stroke="#062949" strokeWidth="0.974971" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23.1466 21.5495C23.7701 20.9769 24.275 20.2878 24.6327 19.5211C24.7397 19.2802 24.7173 19.0017 24.5734 18.7809C24.4294 18.56 24.1832 18.4269 23.9193 18.427H2.07999C1.81601 18.4269 1.56988 18.56 1.42589 18.7809C1.28189 19.0017 1.25957 19.2802 1.36657 19.5211C1.7989 20.438 2.43396 21.2451 3.22395 21.8817" stroke="#062949" strokeWidth="0.974971" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.2173 18.4278V2.615C12.2175 2.04773 11.8533 1.54428 11.3138 1.36602C10.7742 1.18777 10.181 1.37489 9.84207 1.83022L2.8795 12.5493C2.72231 12.7888 2.7095 13.095 2.84613 13.3468C2.98277 13.5985 3.2468 13.7551 3.53364 13.7545L12.2153 13.742" stroke="#062949" strokeWidth="0.974971" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.776 6.64344C16.5889 6.35264 16.232 6.21983 15.8998 6.31732C15.5676 6.41481 15.3396 6.71925 15.3398 7.06489V15.3133H20.9307C21.2159 15.3128 21.4781 15.1571 21.6147 14.9073C21.7514 14.6574 21.7407 14.3531 21.5869 14.1133L16.776 6.64344Z" stroke="#062949" strokeWidth="0.974971" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1453">
                            <rect width="26" height="26" fill="white" transform="translate(0 -0.000488281)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: "A trip like no other",
            description: "Spend unforgettable 7 days at sea with your crew at your own pace.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <g clipPath="url(#clip0_1_1463)">
                        <ellipse cx="7.83015" cy="4.15347" rx="2.83503" ry="2.80337" stroke="#062949" strokeWidth="1.01272" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.8894 15.7518C12.1635 15.2647 11.5448 14.6373 11.0707 13.9074V24.0529C11.0707 24.9377 10.3454 25.6549 9.45067 25.6549C8.55596 25.6549 7.83065 24.9377 7.83065 24.0529C7.83065 24.9377 7.10535 25.6549 6.21064 25.6549C5.31593 25.6549 4.59062 24.9377 4.59062 24.0529V16.8421C4.59062 17.7269 3.86531 18.4441 2.9706 18.4441C2.07589 18.4441 1.35059 17.7269 1.35059 16.8421V13.6383C1.35059 10.9841 3.5265 8.83252 6.21064 8.83252H9.07267C10.4541 8.83377 11.7697 9.41628 12.6907 10.4344" stroke="#062949" strokeWidth="1.01272" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.58887 16.8412V13.6382" stroke="#062949" strokeWidth="1.01272" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.2651 2.03324C20.5683 1.77473 21.0172 1.77473 21.3203 2.03324C24.1769 4.57899 25.7604 8.23565 25.6522 12.0367C25.5863 16.2782 24.895 20.4876 23.6002 24.5317C23.3877 25.1983 22.7626 25.6517 22.0558 25.652H19.5253C18.8185 25.6517 18.1934 25.1983 17.9809 24.5317C16.6861 20.4876 15.9949 16.2782 15.9289 12.0367C15.8222 8.23503 17.4072 4.57837 20.2651 2.03324V2.03324Z" stroke="#062949" strokeWidth="1.01272" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.0664 15.1029L24.6148 6.6499" stroke="#062949" strokeWidth="1.01272" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.0107 20.9794L25.6467 12.4399" stroke="#062949" strokeWidth="1.01272" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1463">
                            <rect width="26" height="26" fill="white" transform="translate(0 -0.000488281)" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: "Active vacation",
            description: "Indulge yourself in dozens of parties and activities on your trip.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M8.40028 21.8813H14.1615" stroke="#062949" strokeWidth="0.900043" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.283 21.8807V13.6088" stroke="#062949" strokeWidth="0.900043" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.6972 6.51283C18.903 6.31568 18.9644 6.01938 18.8531 5.76194C18.7417 5.50451 18.4794 5.33655 18.1883 5.3363H4.38063C4.08953 5.33655 3.82721 5.50451 3.71585 5.76194C3.60449 6.01938 3.66598 6.31568 3.87169 6.51283L11.2849 13.6087L18.6972 6.51283Z" stroke="#062949" strokeWidth="0.900043" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.2001 1.19959H3.90981C4.45545 1.19943 4.95433 1.49441 5.19841 1.96152L6.96135 5.33555" stroke="#062949" strokeWidth="0.900043" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.6774 5.33632C15.6295 5.1091 15.6054 4.87787 15.6054 4.64607C15.607 3.09663 16.6895 1.73903 18.2505 1.3287C19.8114 0.918377 21.4664 1.55637 22.2946 2.88767C23.1228 4.21896 22.9202 5.91574 21.7995 7.03383C20.6789 8.15192 18.9161 8.416 17.4922 7.67912" stroke="#062949" strokeWidth="0.900043" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Bonding",
            description: "Meet people from all over the world, discover new friends.",
        },
    ];




    return (
        <div className="p-4">
            <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 p-4">
                {list.map((item, index) => (
                    <Card
                        key={index}
                        isPressable
                        shadow="sm"
                        className="overflow-hidden rounded-lg"
                        onPress={() => console.log("Item pressed")}
                    >
                        <CardBody className="p-0">
                            <Image
                                src={item.img}
                                alt={`Image ${index + 1}`}
                                className="card-image"
                                radius="lg"
                            />
                        </CardBody>
                    </Card>
                ))}
            </div>

            <div className="features-container">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <div className="feature-item-header">
                            <div className="icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                        </div>
                        <div className="feature-item-description">
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
