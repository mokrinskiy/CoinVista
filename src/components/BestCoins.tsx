import { Box, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchCryptoData } from "../utils/fetchCryptoData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import BestCoinsItem from "./BestCoinsItem";

const BestCoins: React.FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["stats1"],
        queryFn: () => fetchCryptoData("stats"),
    });

    if (isLoading) {
        return <h3>Loding...</h3>;
    }
    if (!data) {
        return <h3>No data</h3>;
    }

    return (
        <Box my="10" w="full">
            {/* heading */}
            <Text fontSize="xl" fontWeight="bold">
                Three best performing coins
            </Text>
            {/* coins section */}
            <Swiper
                slidesPerView={"auto"}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper my-5 z-0"
            >
                {data?.bestCoins.map((item: any) => (
                    <SwiperSlide key={item.uuid} className="w-auto mr-10">
                        <BestCoinsItem
                            uuid={item.uuid}
                            iconUrl={item.iconUrl}
                            name={item.name}
                            symbol={item.symbol}
                            coinrankingUrl={item.coinrankingUrl}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default BestCoins;
