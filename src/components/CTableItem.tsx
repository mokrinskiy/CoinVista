import { Flex, Image, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";

interface CTableItemProps {
    iconUrl: string;
    symbol: string;
    name: string;
    price: number;
    change: number;
}

const CTableItem: React.FC<CTableItemProps> = ({
    iconUrl,
    symbol,
    name,
    price,
    change,
}) => {
    return (
        <Tr>
            <Td>
                <Flex align="center" gap="5">
                    <Image
                        w={{ base: "25px", md: "40px" }}
                        h={{ base: "25px", md: "40px" }}
                        src={iconUrl}
                    />
                    <Text>{symbol}</Text>
                    <Text
                        display={{
                            base: "none",
                            md: "block",
                        }}
                    >
                        {name}
                    </Text>
                </Flex>
            </Td>
            <Td>{Math.round(price * 10000000) / 10000000}</Td>
            {change > 0 ? (
                <Td className="text-green-600">+{change} %</Td>
            ) : (
                <Td className="text-red-600">{change} %</Td>
            )}
        </Tr>
    );
};

export default CTableItem;
