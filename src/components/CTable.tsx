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

interface CTableProps {
    data: [object];
}

const CTable: React.FC<CTableProps> = ({ data }) => {
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
                    {data.map((item: any) => (
                        <CTableItem
                            key={item.uuid}
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
