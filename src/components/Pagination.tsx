import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

interface PaginationProps {
    totalPosts: any;
    setCurrentOffset: any;
    currentOffset: any;
}

const Pagination: React.FC<PaginationProps> = ({
    totalPosts,
    setCurrentOffset,
    currentOffset,
}) => {
    const activePage = currentOffset / 50;
    const lastPage = Math.ceil(totalPosts / 50);
    const pageNumbers = [];

    for (
        let i = activePage - 2;
        i < Math.ceil(totalPosts / 50) && i < activePage + 3;
        i++
    ) {
        if (i >= 0 && i <= lastPage - 2) {
            pageNumbers.push(i);
        }
    }

    return (
        <ButtonGroup
            size={["sm", "sm", "md"]}
            w="full"
            my="4"
            display="flex"
            justifyContent="center"
            variant="outline"
            spacing="2"
        >
            {activePage > 3 && (
                <Button
                    isActive={activePage == 0}
                    onClick={() => setCurrentOffset(0)}
                >
                    1
                </Button>
            )}

            {pageNumbers.map((number) => (
                <Button
                    key={number}
                    isActive={number == activePage}
                    onClick={() => setCurrentOffset(number * 50)}
                >
                    {number + 1}
                </Button>
            ))}
            <Button
                isActive={activePage == lastPage - 1}
                onClick={() => setCurrentOffset(lastPage * 50 - 50)}
            >
                {lastPage}
            </Button>
        </ButtonGroup>
    );
};

export default Pagination;
