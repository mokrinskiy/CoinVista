import {
    Box,
    Button,
    Flex,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavBar: React.FC = () => {
    return (
        <Box position="static" py="4" my="2">
            <Stack flexDirection="row" justifyContent="space-between">
                <Flex align="center" gap="2">
                    <Image w="40px" src="bitcoin.png" />
                    <Text fontSize="lg" fontWeight="bold">
                        CoinVista
                    </Text>
                </Flex>
                <Flex align="center" gap="2">
                    <IconButton
                        display={{ base: "block", md: "none" }}
                        aria-label="Search database"
                        icon={<SearchIcon />}
                    />
                    <InputGroup
                        display={{ base: "none", md: "block" }}
                        alignSelf="center"
                        w="300px"
                    >
                        <Input type="text" placeholder="Type coin name..." />
                        <InputRightElement w="auto">
                            <Button size="sm" mr="1">
                                <SearchIcon />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<KeyboardArrowDownIcon />}
                        >
                            Menu
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Stack>
        </Box>
    );
};

export default NavBar;
