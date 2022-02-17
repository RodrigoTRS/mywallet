import { Flex } from "@chakra-ui/react";
import { Profile } from "./Profile";

export function Header (){
    return (
        <Flex // Header container
        w="100%"
        h="4rem"

        align="center"
        justify="center"

        borderBottom="1px solid"
        borderColor="gray.200"
        >
            <Flex // Header wrapper
            w="100%"
            maxW="1200"
            h="4rem"

            align="center"
            justify="space-between"

            px={{base:8 , xl: 2}}
            >
                Header
            </Flex>

            <Profile />
            
        </Flex>
    );
}