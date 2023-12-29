import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import React from "react";
import CTableItem from "./CTableItem";
import { fetchCryptoData } from "../utils/fetchCryptoData";
import { useQuery } from "@tanstack/react-query";

const CTable: React.FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["table"],
        queryFn: () => fetchCryptoData("coins"),
    });

    if (isLoading) {
        return <h3>Loding...</h3>;
    }
    if (!data) {
        return <h3>No data</h3>;
    }

    return (
        <TableContainer>
            <Table variant="simple" size={{ base: "sm", md: "md", xl: "lg" }}>
                <TableCaption>
                    Imperial to metric conversion factors
                </TableCaption>
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
        </TableContainer>
    );
};

export default CTable;
