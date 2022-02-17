import { ApexOptions } from 'apexcharts';
import { Flex, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[400],
        },
        axisTicks: {
            color: theme.colors.gray[400],
        },
        categories: [
            '2021-03-18T00:00:00.000Z',
            '2021-03-19T00:00:00.000Z',
            '2021-03-20T00:00:00.000Z',
            '2021-03-21T00:00:00.000Z',
            '2021-03-22T00:00:00.000Z',
            '2021-03-23T00:00:00.000Z'
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
};

const series = [{
    name: 'series1',
    data: [
        48500,
        50500,
        52500,
        53500,
        52500,
        57536
    ]

}];

export function ChartPlot() {
    return (
        <Flex
        w="100%"
        pr="10"
        py="4"
        bg="gray.50"

        align="center"
        justify="center"

        border="1px solid"
        borderColor="gray.200"
        borderRadius="1rem"
        >
             <Chart options={options} series={series} type="area" width="840px" height="200px"/>
        </Flex>
    );
}
