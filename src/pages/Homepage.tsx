import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchData } from "../utils/fetchData";
import CTable from "../components/CTable";

const Homepage: React.FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["data"],
        queryFn: () => fetchData("coins"),
    });

    if (isLoading) {
        return <h3>Loding...</h3>;
    }
    if (!data) {
        return <h3>No data</h3>;
    }

    return <CTable data={data} />;
};

export default Homepage;
