import {
    Box,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchModalBody from "./SearchModalBody";

interface SearchModalProps {
    isOpen: any;
    onClose: any;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [searchQ, setSearchQ] = useState("");
    const [q, setQ] = useState("");

    const handleClick = async () => {
        if (q.length > 1 || q !== " ") {
            setSearchQ(q);
        }
    };

    return (
        <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Search Coins by name</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <InputGroup size="md">
                        <Input
                            pr="4.5rem"
                            onChange={(e) => setQ(e.target.value)}
                            type="text"
                            placeholder="Search..."
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                <SearchIcon />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Box mt="5">
                        <SearchModalBody searchQ={searchQ} onClose={onClose} />
                    </Box>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default SearchModal;
