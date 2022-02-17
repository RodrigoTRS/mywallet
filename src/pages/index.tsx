import { Button, Flex, Link, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
    w="100%"
    h="100vh"

    align="center"
    justify="center"

    direction="column"
    >

      <Text fontSize="xl">
      Login page
      </Text>

      <Button mt="4" colorScheme="blue">
        <Link href="/dashboard">Acessar dashboard</Link>
      </Button>

    </Flex>
  )
}