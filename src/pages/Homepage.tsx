import React from "react";
import CTable from "../components/CTable";
import HomeStats from "../components/HomeStats";
import BestCoins from "../components/BestCoins";

const Homepage: React.FC = () => {
    return (
        <>
            <BestCoins />
            <HomeStats />
            <CTable />
        </>
    );
};

export default Homepage;
