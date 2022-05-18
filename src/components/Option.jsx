import React from 'react'
import {
  Box,
  Grid
} from '@mui/material'
import OptionCard from './OptionCard'

export default function Option() {
  return (
    <Box sx={{m: 2}}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={4}>
          <OptionCard/>
        </Grid>
        <Grid item xs={4}>
          <OptionCard/>
        </Grid>
        <Grid item xs={4}>
          <OptionCard/>  
        </Grid>
        <Grid item xs={4}>
          <OptionCard/>
        </Grid>
        <Grid item xs={4}>
          <OptionCard/>
        </Grid>
        <Grid item xs={4}>
          <OptionCard/>
        </Grid>
      </Grid>
    </Box>
  )
}
