import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import BoltIcon from "@mui/icons-material/Bolt";
import React from "react";

interface CryptoMoreInfoProps {
    coin: any;
}

const CryptoMoreInfo: React.FC<CryptoMoreInfoProps> = ({ coin }) => {
    const stats = [
        {
            title: "Price to USD",
            value: `$ ${coin?.price}`,
        },
        { title: "Rank", value: coin?.rank },
        { title: "24h Volume", value: `$ ${coin?.marketCap}` },
        {
            title: "Market Cap",
            value: `$ ${coin?.marketCap}`,
        },
        {
            title: "All-time-high(daily avg.)",
            value: `$ ${coin?.allTimeHigh?.price}`,
        },
    ];

    return (
        <Box display="flex" mt="10">
            <List spacing={3}>
                {stats.map(({ title, value }) => (
                    <ListItem fontSize={["xs", "sm", "md"]} alignItems="center" key={title} display="flex" alignSelf="center">
                        <ListIcon as={BoltIcon} />
                        {title}: <Text fontSize={["sm", "sm", "md"]}  ml="2">{value}</Text>
                    </ListItem>
                ))}
            </List>
            <List spacing={3}></List>
        </Box>
    );
};

export default CryptoMoreInfo;
