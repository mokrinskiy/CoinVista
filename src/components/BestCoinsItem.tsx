import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import { Link } from "react-router-dom";

interface BestCoinsItemProps {
    uuid: string,
    iconUrl: string;
    name: string;
    symbol: string;
    coinrankingUrl: string;
}

const BestCoinsItem: React.FC<BestCoinsItemProps> = ({
    uuid,
    iconUrl,
    name,
    symbol,
    coinrankingUrl,
}) => {
    return (
        <Card size="sm" w={["150px", "200px", "290px"]} variant="outline">
            <CardBody
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
            >
                <Image w={["40px", "60px"]} src={iconUrl} borderRadius="lg" />
                <Flex gap="2" align="center">
                    <Text display={["none", "block"]} fontWeight="bold" mt="5">
                        {name}
                    </Text>
                    <Text fontSize="sm" mt="5">
                        {symbol}
                    </Text>
                </Flex>
            </CardBody>
            <CardFooter display="flex" justifyContent="end">
                <ButtonGroup spacing="2">
                    <Button as={Link} to={`/coins/${uuid}`} size={["xs", "sm"]}>CV</Button>
                    <Button
                        as="a"
                        size={["xs", "sm"]}
                        variant="solid"
                        rightIcon={<KeyboardArrowRightIcon />}
                        href={coinrankingUrl}
                        target="yes"
                    >
                        CR
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default BestCoinsItem;
