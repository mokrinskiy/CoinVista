import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchCryptoData } from "../utils/fetchCryptoData";
import { useParams } from "react-router";
import { Box } from "@chakra-ui/react";
import LineChart from "../components/LineChart";
import TimePeriodRadio from "../components/TimePeriodRadio";
import CryptoInfo from "../components/CryptoDetails/CryptoInfo";
import CryptoMoreInfo from "../components/CryptoDetails/CryptoMoreInfo";

const CryptoDetails: React.FC = () => {
    const { uuid } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["table"],
        queryFn: () => fetchCryptoData(`coin/${uuid}`),
    });

    const [currTimePeriod, setCurrTimePeriod] = useState("1h");

    if (isLoading) return <h3>Loding...</h3>;

    if (!data) return <h3>No data</h3>;

    return (
        <Box my="10">
            {/* info */}
            <CryptoInfo coin={data?.coin} />
            {/* chart */}
            <TimePeriodRadio
                currTimePeriod={currTimePeriod}
                setCurrTimePeriod={setCurrTimePeriod}
            />
            <LineChart currTimePeriod={currTimePeriod} uuid={String(uuid)} />
            {/* more info */}
            <CryptoMoreInfo coin={data?.coin} />
        </Box>
    );
};

export default CryptoDetails;
