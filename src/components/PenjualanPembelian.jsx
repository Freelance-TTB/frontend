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

import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { type: 'Pembelian', price: 2525 },
  { type: 'Penjualan', price: 3018 }
];

export default function PenjualanPembelian() {
  return (
    <Box sx={{my: 5}}>
      <Paper>
        <Chart
          data={data}
          rotated
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="price"
            argumentField="type"
          />
          <Title text="Penjualan dan Pembelian" />
          <Animation />
        </Chart>
      </Paper>
    </Box>
  )
}
