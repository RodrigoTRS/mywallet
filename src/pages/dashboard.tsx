import { Flex, Text, Grid, GridItem } from '@chakra-ui/react'
import { ChartPlot } from '../components/Chart'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { StatCard } from '../components/StatCard'
import { Table } from '../components/Table'
import { TopMenu } from '../components/TopMenu'

export default function Home() {
  return (
    <Flex
    w="100%"

    align="center"
    justify="center"

    direction="column"
    position="relative"

    >
        <Header />

        <Grid
        maxW="1200"
        w="100%"
        h='200px'
        templateRows='repeat(4, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
        >

            <GridItem rowSpan={4} colSpan={1} //Sidebar
            > 
                <Sidebar />
            </GridItem>

            <GridItem rowSpan={1} colSpan={3}  //TopMenu
            >
                <TopMenu />
            </GridItem>

            <GridItem rowSpan={1} colSpan={1} //Card 1
            >
                <StatCard
                name="Total investido"
                value={48536}
                variation={23}
                />
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}  //Card 2
            >
                <StatCard
                name="Patrimônio total"
                value={57536}
                variation={23}
                />
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}  //Card 3
            >
                <StatCard
                name="Rentabilidade"
                value={8536}
                variation={23}
                />
            </GridItem>

            <GridItem rowSpan={1} colSpan={3}  //Chart
            >
                <ChartPlot />
            </GridItem>

            
            <GridItem rowSpan={1} colSpan={3}  //Table
            >
                <Table />
            </GridItem>
            

        </Grid>
    </Flex>
  )
}