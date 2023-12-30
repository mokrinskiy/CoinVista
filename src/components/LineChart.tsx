import React from "react";
import { fetchCryptoData } from "../utils/fetchCryptoData";
import { useQuery } from "@tanstack/react-query";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { fetchLineChart } from "../utils/fetchLineChart";

interface LineChartProps {
    uuid: string;
    currTimePeriod: string;
}

const LineChart: React.FC<LineChartProps> = ({ uuid, currTimePeriod }) => {
    const { data, isLoading } = useQuery({
        queryKey: ["chart", currTimePeriod],
        queryFn: () =>
            fetchCryptoData(
                `coin/${uuid}/history${
                    currTimePeriod && `?timePeriod=${currTimePeriod}`
                }`
            ),
    });

    const { lineChart_data, lineChart_options } = fetchLineChart(data);

    if (isLoading) {
        return <h3>Loding...</h3>;
    }
    if (!data) {
        return <h3>No data</h3>;
    }

    return (
        <Chart
        className="w-[1000px] h-[500px]"
            type="line"
            data={lineChart_data}
            options={lineChart_options}
        />
    );
};

export default LineChart;
