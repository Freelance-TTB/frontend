import React from 'react'
import {
  Box,
  Button,
  Card,
  AppBar,
  Grid,
  Toolbar,
  Typography,
  IconButton
} from '@mui/material'

export default function Hutang() {
  return (
    // <Box sx={{border: 1, borderRadius: 5,  my: 5}}>
    <Card variant="outlined">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3
        }}
      >
        <Typography variant="h4" sx={{ m: 3 }}>
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
              px: 3,
              py: 1,
              my: 1,
              mx: 3
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
            Pembelian
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              borderRadius: 10,
              bgcolor: '#C8C8C8',
              px: 3,
              py: 1,
              my: 1,
              mx: 3
            }}
          >
            Rp 0
          </Box>
        </Grid>
      </Grid>
    </Card>
    // </Box>
  )
}
