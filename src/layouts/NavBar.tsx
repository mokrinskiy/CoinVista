import {
    Box,
    Flex,
    IconButton,
    Image,
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
import MenuIcon from "@mui/icons-material/Menu";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import SearchModal from "../components/SearchModal";

const NavBar: React.FC = () => {
    const { toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                    {/* search */}
                    <IconButton
                        aria-label="Search"
                        icon={<SearchIcon />}
                        onClick={onOpen}
                    />
                    <SearchModal isOpen={isOpen} onClose={onClose} />
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
