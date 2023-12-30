import { Box } from "@chakra-ui/react";
import React from "react";
import SearchItem from "./SearchItem";
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoData } from "../utils/fetchCryptoData";

interface SearchModalBodyProps {
    onClose: any;
    searchQ: string;
}

const SearchModalBody: React.FC<SearchModalBodyProps> = ({
    onClose,
    searchQ,
}) => {
    const { data, isLoading } = useQuery({
        queryKey: ["search", searchQ],
        queryFn: () => fetchCryptoData(`search-suggestions?query=${searchQ}`),
    });

    if (isLoading) {
        return <h3>Loding...</h3>;
    }
    if (!data?.coins.length) {
        return <h3>No data or to many requests</h3>;
    }
    return (
        <Box>
            {data?.coins?.map((coin: any) => (
                <SearchItem
                    onClose={onClose}
                    key={coin?.uuid}
                    uuid={coin?.uuid}
                    symbol={coin?.symbol}
                    name={coin?.name}
                    iconUrl={coin.iconUrl}
                />
            ))}
        </Box>
    );
};

export default SearchModalBody;
