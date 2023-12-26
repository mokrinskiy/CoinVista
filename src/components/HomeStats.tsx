import React from "react";
import {
    Button,
    Center,
    Divider,
    Flex,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    Tooltip,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/fetchData";
import { formatNumber } from "../utils/formatNumber";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";

const HomeStats: React.FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["stats"],
        queryFn: () => fetchData("stats"),
    });

    if (isLoading) {
        return <h3>Loding...</h3>;
    }
    if (!data) {
        return <h3>No data</h3>;
    }

    console.log(data);
    return (
        <Swiper
            slidesPerView={"auto"}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper my-5 z-0"
        >
            <SwiperSlide className="w-auto mr-10">
                <Stat>
                    <StatLabel>
                        Market cap{" "}
                        <Tooltip
                            hasArrow
                            label="Market capitalization. Price times circulating supply"
                            placement="top"
                        >
                            <Button size="xs">?</Button>
                        </Tooltip>
                    </StatLabel>
                    <Flex align="center" gap="2">
                        <StatNumber>
                            $ {formatNumber(data.totalMarketCap)[0]}
                        </StatNumber>
                        <StatHelpText pt="2" m="0">
                            {formatNumber(data.totalMarketCap)[1]}
                        </StatHelpText>
                    </Flex>
                </Stat>
            </SwiperSlide>
            <SwiperSlide className="flex gap-4 w-auto mr-10">
                <Center height="50px">
                    <Divider orientation="vertical" />
                </Center>
                <Stat>
                    <StatLabel>
                        24h Market cap{" "}
                        <Tooltip
                            hasArrow
                            label="Total trade volume in 24 hours, calculated in the reference currency"
                            placement="top"
                        >
                            <Button size="xs">?</Button>
                        </Tooltip>
                    </StatLabel>
                    <Flex align="center" gap="2">
                        <StatNumber>
                            $ {formatNumber(data.total24hVolume)[0]}
                        </StatNumber>
                        <StatHelpText pt="2" m="0">
                            {formatNumber(data.total24hVolume)[1]}
                        </StatHelpText>
                    </Flex>
                </Stat>
            </SwiperSlide>
            <SwiperSlide className="flex gap-4 w-auto mr-10">
                <Center height="50px">
                    <Divider orientation="vertical" />
                </Center>
                <Stat>
                    <StatLabel>
                        BTC dominance{" "}
                        <Tooltip
                            hasArrow
                            label="Current percentage of the total crypto market capitalization accounted for by Bitcoin"
                            placement="top"
                        >
                            <Button size="xs">?</Button>
                        </Tooltip>
                    </StatLabel>
                    <StatNumber>{data.btcDominance.toFixed(1)}%</StatNumber>
                </Stat>
            </SwiperSlide>
            <SwiperSlide className="flex gap-4 w-auto mr-10">
                <Center height="50px">
                    <Divider orientation="vertical" />
                </Center>
                <Stat>
                    <StatLabel>
                        All coins{" "}
                        <Tooltip
                            hasArrow
                            label="Total number of coins"
                            placement="top"
                        >
                            <Button size="xs">?</Button>
                        </Tooltip>
                    </StatLabel>
                    <StatNumber>{data.totalCoins.toLocaleString()}</StatNumber>
                </Stat>
            </SwiperSlide>
        </Swiper>
    );
};

export default HomeStats;
