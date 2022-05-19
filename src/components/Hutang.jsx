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

export default function Hutang() {
  return (
    <Box sx={{border: 1, my: 5}}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3
        }}
      >
        <Typography variant="h5">
          Hutang
        </Typography>
      </Box>

      <Grid container spacing={1} sx={{mb: 2}}>
        <Grid item xs={2}>
          <Typography
            align='center'
            sx={{
              p: 2
            }}
          >
            Pelanggan
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              borderRadius: 10,
              bgcolor: '#C8C8C8',
              p: 1,
              m: 1
            }}
          >
            Rp 0
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1} sx={{mb: 2}}  >
        <Grid item xs={2}>
          <Typography
            align='center'
            sx={{
              p: 2
            }}
          >
            Pelanggan
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              borderRadius: 10,
              bgcolor: '#C8C8C8',
              p: 1,
              m: 1
            }}
          >
            Rp 0
          </Box>
        </Grid>
      </Grid>
      
    </Box>
  )
}
