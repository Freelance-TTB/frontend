import React from 'react'
import {
  Box,
  Button,
  AppBar,
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
      horizontal: true
    }
  },
  xaxis: {
    categories: ['Penjualan', 'Pembelian']
  }
}

const series = [
  {
    name: 'Nominal (Rp)',
    data: [1000, 2000]
  }
]


export default function PenjualanPembelian() {
  return (
    <Box sx={{my: 5}}>
      <Chart options={options} series={series} type="bar" height={200}/>
    </Box>
  )
}
