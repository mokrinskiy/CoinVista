import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

interface SearchItemProps {
    uuid: string;
    onClose: any;
    symbol: string;
    name: string;
    iconUrl: string;
}

const SearchItem: React.FC<SearchItemProps> = ({
    uuid,
    onClose,
    symbol,
    name,
    iconUrl,
}) => {
    return (
        <Link to={`/coins/${uuid}`}>
            <Flex
                my="2"
                p="2"
                onClick={onClose}
                _hover={{
                    background: "blackAlpha.100",
                }}
                w="full"
                align="center"
                gap="4"
            >
                <Image
                    w={{ base: "25px", md: "40px" }}
                    h={{ base: "25px", md: "40px" }}
                    src={iconUrl}
                />
                <Text as="samp">{symbol}</Text>
                <Text>{name}</Text>
            </Flex>
        </Link>
    );
};

export default SearchItem;
