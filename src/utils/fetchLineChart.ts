export const fetchLineChart = (data: any) => {
    const coinPrice = [];
    const coinTimeStamp = [];

    for (let i = 0; i < data?.history?.length; i++) {
        coinPrice.push(data?.history[i]?.price);
        coinTimeStamp.push(
            new Date(data?.history[i]?.timestamp * 1000).toLocaleDateString()
        );
    }

    const lineChart_data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: "Price in USD",
                data: coinPrice,
                fill: false,
            },
        ],
    };

    const lineChart_options: any = {
        scales: {
            reverse: true,
        },
    };

    return { lineChart_options, lineChart_data };
};
