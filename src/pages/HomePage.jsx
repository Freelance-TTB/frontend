import React from 'react'
import {
  Box,
  Button,
  AppBar,
  Grid,
  Toolbar,
  Typography,
  IconButton
} from '@mui/material'
import Navbar from '../components/Navbar';
import Option from '../components/Option';
import Hutang from "../components/Hutang";
import PenjualanPembelian from "../components/PenjualanPembelian";
import KasBank from "../components/KasBank";

export default function HomePage() {
  return (
    <Box>
      <Box sx={{ mx: 5}}>
        <Option/>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Hutang/>
          </Grid>
          <Grid item xs={6}>
            <PenjualanPembelian/> 
          </Grid>
        </Grid>
        <KasBank/>
      </Box>
    </Box>
  )
}
