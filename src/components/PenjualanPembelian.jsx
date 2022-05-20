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
    categories: ['Penjualan', 'Pembelian']
  },
  colors: ['#85C88A', '#F44336']
}

const series = [
  {
    name: 'Nominal (Rp)',
    data: [1000, 2000]
  }
]


export default function PenjualanPembelian() {
  return (
    <Card variant="outlined" sx={{my: 5}}>
      <Box sx={{mx: 3}}>
        <Typography
          align='center'
          sx={{ m: 3 }}
          variant="h4"
        >
          Penjualan & Pembelian
        </Typography>
      <Chart options={options} series={series} type="bar" height={200}/>
      </Box>
    </Card>
  )
}
