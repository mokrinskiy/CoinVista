import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Image,
    Link,
    Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchData } from "../utils/fetchData";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";

const BestCoins: React.FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["stats1"],
        queryFn: () => fetchData("stats"),
    });

    if (isLoading) {
        return <h3>Loding...</h3>;
    }
    if (!data) {
        return <h3>No data</h3>;
    }

    return (
        <Box my="10" w="full">
            <Text fontSize="xl" fontWeight="bold">
                Three best performing coins
            </Text>
            <Swiper
                slidesPerView={"auto"}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper my-5 z-0"
            >
                {data.bestCoins.map((item: any) => (
                    <SwiperSlide key={item.uuid} className="w-auto mr-10">
                        <Card
                            size="sm"
                            w={["150px", "200px", "290px"]}
                            variant="outline"
                        >
                            <CardBody
                                display="flex"
                                justifyContent="center"
                                flexDirection="column"
                                alignItems="center"
                            >
                                <Image
                                    w={["40px", "60px"]}
                                    src={item.iconUrl}
                                    borderRadius="lg"
                                />
                                <Flex gap="2" align="center">
                                    <Text
                                        display={["none", "block"]}
                                        fontWeight="bold"
                                        mt="5"
                                    >
                                        {item.name}
                                    </Text>
                                    <Text fontSize="sm" mt="5">
                                        {item.symbol}
                                    </Text>
                                </Flex>
                            </CardBody>
                            <CardFooter display="flex" justifyContent="end">
                                <ButtonGroup spacing="2">
                                    <Button size={["xs", "sm"]}>CV</Button>
                                    <Button
                                        as={Link}
                                        size={["xs", "sm"]}
                                        variant="solid"
                                        rightIcon={<KeyboardArrowRightIcon />}
                                        href={item.coinrankingUrl}
                                        target="yes"
                                    >
                                        CR
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default BestCoins;
