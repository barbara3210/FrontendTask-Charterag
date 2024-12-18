import Image from 'next/image';

const Route = ({ imageSrc, price, title, progressBars, routeLink }) => {
    return (
        <div className="route-card">
            <Image
                src={imageSrc}
                alt={title}
                layout="fill" 
                objectFit="cover" 
                className="route-image"
            />
            <div className="route-bottom-content">
                <div className="route-left-text">
                    <p className="route-price">From {price}/person</p>
                    <div className="route-title">
                        <span>{title}</span>
                        <Image src="/routes/Chevron.png" alt="Chevron" width={40} height={40} />
                    </div>
                </div>
                <div className="route-progress-container">
                    {progressBars.map((bar, index) => (
                        <div key={index} className="progress-item">
                            <span className="progress-label">{bar.label}</span>
                            <progress value={bar.value} max="100"></progress>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Route;
