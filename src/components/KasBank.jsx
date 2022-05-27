import React from 'react'
import { useState, useEffect } from 'react'

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

const banks = [
  {id: 1, name: 'BNI'},
  {id: 2, name: 'BCA'},
  {id: 3, name: 'Mandiri'},
  {id: 4, name: 'BRI'},
  {id: 5, name: 'CIMB'},
  {id: 6, name: 'BSI'},
  {id: 7, name: 'Kas'},
  {id: 8, name: 'Bank Jago'},
]

export default function KasBank() {

  return (
    <Card>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3
        }}
      >
        <Typography variant="h4" sx={{ m: 3 }}>
          Kas dan Bank
        </Typography>
      </Box>

      <Box sx={{height: 220}}>
      {
        banks.map((bank, index) => {
          return (
            <Grid container spacing={1} sx={{mb: 2}}>
              <Grid item xs={2}>
                <Typography
                  sx={{
                    p: 2,
                    ml: 3
                  }}
                >
                  {bank.name}
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
        })
      }
      </Box>

    </Card>
  )
}
