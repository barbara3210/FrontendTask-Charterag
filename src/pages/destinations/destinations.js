import Route from "../../components/route/route"; 
import SectionBlock from "../../components/section/section-block";
import "./destinations.css"; 

const DestinationsSection = () => {
    return (
        <div className="destinations-section"> 
            <div>
                <SectionBlock
                    label="destinations"
                    title="Whether it’s a bash or bliss — the choice is yours"
                    content="On our customized sailing adventures, embracing the thrill of our party routes or unwinding on our relaxing voyages — crafting your perfect journey at sea has never been easier"
                    labelColor="#FFF"
                    labelColorBack="#103C63"
                    titleColor="#062949"
                    contentColor="#062949"
                />
            </div>
            <Route
                imageSrc="/routes/party-route.png" 
                price="€710"
                title="Party Route"
                routeLink="/party"
                progressBars={[
                    { label: "Party", value: 75 },
                    { label: "Adventure", value: 30 },
                ]}
            />
            <Route 
                imageSrc="/routes/ultra-route.png" 
                price="€792"
                title="Ultra Route"
                routeLink="/ultra"
                progressBars={[
                    { label: "Party", value: 95 },
                    { label: "Adventure", value: 25 },
                ]}
            />
            <Route 
                imageSrc="/routes/greece-route.png"
                price="€710"
                title="Greece Route"
                routeLink="/greece"
                progressBars={[
                    { label: "Party", value: 50 },
                    { label: "Adventure", value: 80 },
                ]}
            />
            <Route 
                imageSrc="/routes/adventure-route.png" 
                price="€850"
                title="Adventure Route"
                routeLink="/adventure"
                progressBars={[
                    { label: "Party", value: 10 },
                    { label: "Adventure", value: 90 },
                ]}
            />
        </div>
    );
};

export default DestinationsSection; 
