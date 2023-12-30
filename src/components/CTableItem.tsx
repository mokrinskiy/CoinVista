import { Flex, Image, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

interface CTableItemProps {
    index: number;
    rank: number;
    uuid: string;
    iconUrl: string;
    symbol: string;
    name: string;
    price: number;
    change: number;
}

const CTableItem: React.FC<CTableItemProps> = ({
    rank,
    uuid,
    iconUrl,
    symbol,
    name,
    price,
    change,
}) => {
    return (
        <Tr
            _hover={{
                background: "blackAlpha.100",
            }}
        >
            <Td>
                <Link to={`/coins/${uuid}`}>
                    <Flex align="center" gap="4">
                        <Text fontSize="xs">{rank} </Text>
                        <Image
                            w={{ base: "25px", md: "40px" }}
                            h={{ base: "25px", md: "40px" }}
                            src={iconUrl}
                        />
                        <Text as="samp">{symbol}</Text>
                        <Text
                            display={{
                                base: "none",
                                md: "block",
                            }}
                        >
                            {name}
                        </Text>
                    </Flex>
                </Link>
            </Td>
            <Td fontSize={["xs", "md"]}>
                $ {Math.round(price * 10000000) / 10000000}
            </Td>
            {change > 0 ? (
                <Td className="text-green-600">+{change} %</Td>
            ) : (
                <Td className="text-red-600">{change} %</Td>
            )}
        </Tr>
    );
};

export default CTableItem;
