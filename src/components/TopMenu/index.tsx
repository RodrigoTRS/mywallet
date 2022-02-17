import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Text, IconButton } from "@chakra-ui/react";
import { FiCalendar } from "react-icons/fi";

export function TopMenu () {
    return (
        <Flex
        h="4rem"
        pl="1rem"
        fontSize="md"

        justify="space-between"
        align="center"

        borderBottom="1px solid"
        borderColor="gray.200"
        >
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Breadcrumb example</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Text>
                10 de Abril - 29 de maio
                <IconButton
                ml="4"
                bg="gray.200"
                aria-label="Select data"
                icon={<FiCalendar size="24" color="gray.500" />}
                />
            </Text>

        </Flex>
    )
}