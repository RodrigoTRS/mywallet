import { Flex, Heading } from "@chakra-ui/layout";
import { TableCaption, Table as MyTable, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/react";

export function Table () {
    return (
        <>
            <Heading p="4" pb="2" fontWeight="bold" fontSize="3xl">Extrato</Heading>
            <Flex
            w="100%"
            bg="gray.50"

            align="center"
            justify="center"

            border="1px solid"
            borderColor="gray.200"
            borderRadius="1rem"
            mb="16"
            >   

                <MyTable>

                    <Thead>
                        <Tr>
                            <Th>Ticker</Th>
                            <Th>Preço</Th>
                            <Th>Câmbio</Th>
                            <Th>Data</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        <Tr color="gray.400">
                            <Td>TSLA</Td>
                            <Td>U$714,93</Td>
                            <Td>U$5,43</Td>
                            <Td>22/03/2022</Td>
                        </Tr>
                        <Tr color="gray.400">
                            <Td>TSLA</Td>
                            <Td>U$714,93</Td>
                            <Td>U$5,43</Td>
                            <Td>22/03/2022</Td>
                        </Tr>
                        <Tr color="gray.400">
                            <Td>TSLA</Td>
                            <Td>U$714,93</Td>
                            <Td>U$5,43</Td>
                            <Td>22/03/2022</Td>
                        </Tr>
                        <Tr color="gray.400">
                            <Td>TSLA</Td>
                            <Td>U$714,93</Td>
                            <Td>U$5,43</Td>
                            <Td>22/03/2022</Td>
                        </Tr>
                        <Tr color="gray.400">
                            <Td>TSLA</Td>
                            <Td>U$714,93</Td>
                            <Td>U$5,43</Td>
                            <Td>22/03/2022</Td>
                        </Tr>
                        <Tr color="gray.400">
                            <Td>TSLA</Td>
                            <Td>U$714,93</Td>
                            <Td>U$5,43</Td>
                            <Td>22/03/2022</Td>
                        </Tr>
                        <Tr color="gray.400">
                            <Td>TSLA</Td>
                            <Td>U$714,93</Td>
                            <Td>U$5,43</Td>
                            <Td>22/03/2022</Td>
                        </Tr>
                    </Tbody>

                </MyTable>   
                
            </Flex>
        </>
    )
}