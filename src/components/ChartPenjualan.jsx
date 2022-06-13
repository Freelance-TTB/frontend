import React from 'react'
import {
  Box,
  Button,
  Card,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  Paper
} from '@mui/material'

import Chart from 'react-apexcharts'

const options = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true
    }
  },
  xaxis: {
    categories: ['Hari Ini', 'Minggu Ini', 'Bulan Ini']
  },
  colors: ['#85C88A', '#F44336', '#254364']
}

const series = [
  {
    name: 'Total Item',
    data: [1000, 2000, 4000]
  }
]

export default function ChartPenjualan() {
  return (
      <Box sx={{m: 3}}>
        <Typography
          align='center'
          variant="h4"
        >
          Total Penjualan
        </Typography>
      <Chart options={options} series={series} type="bar" height={250}/>
      </Box>
  )
}
