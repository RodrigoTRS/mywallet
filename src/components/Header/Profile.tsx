import { Avatar, Flex, Text } from "@chakra-ui/react";

export function Profile () {
    return (
        <Flex
        align="center"
        >

            <Flex
            direction="column"
            textAlign="right"
            >
                <Text fontSize="1rem" fontWeight="medium" >Rodrigo Teixeira</Text>
                <Text fontSize="0.8rem" fontWeight="normal">rodrigoteix1998@gmail.com</Text>
            </Flex>

            <Avatar
            name="Rodrigo Teixeira"
            size="md"
            ml="4"
            />

        </Flex>
    )
}