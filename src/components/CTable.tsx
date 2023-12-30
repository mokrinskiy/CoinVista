import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import CTableItem from "./CTableItem";
import { fetchCryptoData } from "../utils/fetchCryptoData";
import { useQuery } from "@tanstack/react-query";
import Pagination from "./Pagination";

const CTable: React.FC = () => {
    const [currentOffset, setCurrentOffset] = useState(0);

    const { data, isLoading } = useQuery({
        queryKey: ["table", currentOffset],
        queryFn: () => fetchCryptoData(`coins?offset=${currentOffset}`),
    });

    const totalPosts = data?.stats?.total;

    if (isLoading) {
        return <h3>Loding...</h3>;
    }
    if (!data) {
        return <h3>No data</h3>;
    }

    return (
        <TableContainer>
            <Table variant="simple" size={{ base: "sm", md: "md", xl: "lg" }}>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Price</Th>
                        <Th>Change</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.coins?.map((item: any, index: number) => (
                        <CTableItem
                            key={item.uuid}
                            rank={item.rank}
                            index={index}
                            uuid={item.uuid}
                            iconUrl={item.iconUrl}
                            name={item.name}
                            symbol={item.symbol}
                            price={item.price}
                            change={item.change}
                        />
                    ))}
                </Tbody>
            </Table>
            <Pagination
                currentOffset={currentOffset}
                setCurrentOffset={setCurrentOffset}
                totalPosts={totalPosts}
            />
        </TableContainer>
    );
};

export default CTable;
