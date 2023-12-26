import React from "react";
import CTable from "../components/CTable";
import HomeStats from "../components/HomeStats";

const Homepage: React.FC = () => {
    return (
        <>
            <HomeStats />
            <CTable />
        </>
    );
};

export default Homepage;
