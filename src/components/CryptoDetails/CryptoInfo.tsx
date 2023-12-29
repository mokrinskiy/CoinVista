import {
    Box,
    Button,
    Divider,
    Flex,
    Image,
    Link,
    Text,
    Tooltip,
} from "@chakra-ui/react";
import React from "react";

interface CryptoInfoProps {
    coin: any;
}

const CryptoInfo: React.FC<CryptoInfoProps> = ({ coin }) => {
    return (
        <Box>
            {/* name & price & rank */}
            <Box
                display="flex"
                gap="20"
                alignContent="center"
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    gap="3"
                    flexDirection={["column", "column", "row"]}
                    alignContent="center"
                >
                    <Box display="flex" gap="3" alignContent="center">
                        <Image
                            src={coin?.iconUrl}
                            w={["30px", "30px", "50px"]}
                            h={["30px", "30px", "50px"]}
                        />
                        <Text
                            display="flex"
                            justifyContent="start"
                            alignSelf="center"
                            fontWeight="bold"
                            fontSize={["md", "md", "xl"]}
                        >
                            {coin?.name}
                        </Text>
                        <Text
                            alignSelf="center"
                            color="gray"
                            pr="16"
                            fontSize={["sm", "sm", "xl"]}
                        >
                            {coin?.symbol}
                        </Text>
                    </Box>
                    <Box
                        alignSelf="center"
                        display="flex"
                        justifyContent="start"
                        w="full"
                    >
                        <Text fontSize={["md", "md", "xl"]} fontWeight="bold">
                            $ {coin?.price}
                        </Text>
                    </Box>
                </Box>
                <Box alignSelf="center">
                    <Text>
                        <Tooltip
                            hasArrow
                            label="The position in the ranks"
                            placement="top"
                        >
                            <Button size="xs"># Rank: {coin?.rank}</Button>
                        </Tooltip>
                    </Text>
                </Box>
            </Box>
            <Divider my="5" orientation="horizontal" />
            {/* description & websiteUrl */}
            <Box display="flex" flexDirection="column" gap="2" mt="5">
                <Flex gap="2">
                    <Text fontSize={["xs", "xs", "xl"]} fontWeight="bold">
                        Description:
                    </Text>{" "}
                    <Text fontSize={["sm", "sm", "md"]}>
                        {coin?.description}
                    </Text>
                </Flex>
                {coin?.websiteUrl && (
                    <Flex gap="2">
                        <Text
                            fontSize={["xs", "xs", "xl"]}
                            alignSelf="center"
                            fontWeight="bold"
                        >
                            Website:{" "}
                        </Text>{" "}
                        <Link fontSize={["sm", "sm", "xl"]} href={coin?.websiteUrl} isExternal>
                            {coin?.websiteUrl}
                        </Link>
                    </Flex>
                )}
            </Box>
        </Box>
    );
};

export default CryptoInfo;
