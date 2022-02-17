import { Flex, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";

interface StatCardProps {
    name: string,
    value: number,
    variation: number
}

export function StatCard ({name, value, variation}: StatCardProps){
    return (
        <Flex // Sidebar container
        h="160px"
        bg="gray.50"

        border="1px solid"
        borderColor="gray.200"
        borderRadius="1rem"
        >
            <Flex // Sidebar wrapper
            w="100%"
            align="center"
            justify="center"
            >
                <Flex>
                    <Stat textAlign="center">
                        <StatLabel fontSize="lg" color="gray.500">{name}</StatLabel>
                        <StatNumber fontSize="4xl">{"R$" + value}</StatNumber>
                        <StatHelpText fontSize="md">
                            <StatArrow type='increase' />{variation + "%"} 
                        </StatHelpText>
                    </Stat>
                </Flex>
            </Flex>
        </Flex>
    );
}