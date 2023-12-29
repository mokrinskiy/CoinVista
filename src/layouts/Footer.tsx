import {
    Box,
    Container,
} from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
    return (
        <Box py="4" px="10" as="footer" role="contentinfo" bg="blackAlpha.100">
            <Container>Footer</Container>
        </Box>
    );
};

export default Footer;
