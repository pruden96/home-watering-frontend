import React from "react";
import WateringCard from "../components/WateringCard";

// Component definition using React + Typescript -> React.FC | FC = Function Component
const Home: React.FC = () => {
    return (
        <div className="home-page">
            <WateringCard />
        </div>
    );
};

export default Home;
