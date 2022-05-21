import React from 'react'
import {
  Box,
  Button,
  AppBar,
  Card,
  Grid,
  Toolbar,
  Typography,
  IconButton
} from '@mui/material'

export default function Bank({ bank }) {
  return (
    <Grid container spacing={1} sx={{mb: 2}}>
      <Grid item xs={2}>
        <Typography
          align='center'
          sx={{
            p: 2
          }}
        >
          {bank}
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
  )
}
