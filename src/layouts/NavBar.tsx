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
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Stack,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <Box py="4" px={{ base: "4", md: "6", lg: "10" }}>
            <Stack flexDirection="row" justifyContent="space-between">
                {/* logo */}
                <Flex as={Link} to={"/"} align="center" gap="2">
                    <Image w="40px" src="/logo.png" />
                    <Text fontSize="lg" fontWeight="bold">
                        CoinVista
                    </Text>
                </Flex>
                {/* nav */}
                <Flex align="center" gap="2">
                    {/* search mobile */}
                    <IconButton
                        display={{ base: "block", md: "none" }}
                        aria-label="Search"
                        icon={<SearchIcon />}
                    />
                    {/* search pc */}
                    <InputGroup
                        display={{ base: "none", md: "block" }}
                        alignSelf="center"
                        w="300px"
                    >
                        <Input type="text" placeholder="Search..." />
                        <InputRightElement w="auto">
                            <Button size="sm" mr="1">
                                <SearchIcon />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {/* color theme */}
                    <IconButton
                        aria-label="color mode"
                        variant="outline"
                        icon={<DarkModeIcon />}
                        onClick={toggleColorMode}
                    />
                    {/* menu */}
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            icon={<MenuIcon />}
                            variant="outline"
                        />
                        <MenuList>
                            <MenuGroup title="Navigate">
                                <MenuItem
                                    as={Link}
                                    to={"/"}
                                    icon={<CurrencyBitcoinIcon />}
                                >
                                    Сrypto Сurrencies
                                </MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Other">
                                <MenuItem
                                    as={Link}
                                    to={"/"}
                                    icon={<CurrencyExchangeIcon />}
                                >
                                    Convert
                                </MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                </Flex>
            </Stack>
        </Box>
    );
};

export default NavBar;
