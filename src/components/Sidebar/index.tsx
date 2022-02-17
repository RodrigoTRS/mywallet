import { Flex, Link, Icon, Stack } from "@chakra-ui/react";
import { FiGrid, FiDollarSign, FiLock } from "react-icons/fi";

export function Sidebar (){
    return (
        <Flex // Sidebar container
        h="100%"
        bg="gray.100"
        >
            <Flex // Sidebar wrapper
            w="100%"
            p="8"

            align="baseline"

            borderBottom="1px solid"
            borderColor="gray.200"
            >
                <Stack w="100%" spacing="4">
                
                    <Flex
                    bg="teal.100"
                    align="center"
                    p="12px 16px"
                    borderRadius="16"
                    >
                        <FiGrid />
                        <Link href="/" lineHeight="1" ml="2">Dashboard</Link>
                    </Flex>

                    <Flex
                    w="100%"
                    bg="teal.100"
                    align="center"
                    p="12px 16px"
                    borderRadius="16"
                    >
                        <FiDollarSign />
                        <Link href="/" lineHeight="1" ml="2">Produtos</Link>
                    </Flex>

                    <Flex
                    w="100%"
                    bg="teal.100"
                    align="center"
                    p="12px 16px"
                    borderRadius="16"
                    >
                        <FiLock />
                        <Link href="/" lineHeight="1" ml="2">Segurança</Link>
                    </Flex>

                </Stack>
            </Flex>
        </Flex>
    );
}