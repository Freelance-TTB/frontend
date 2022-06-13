import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography
} from '@mui/material'

export default function OptionCard ({ item }) {
  const navigate = useNavigate()
  function cardPage () {
    navigate(item.router)
  }

  return (
    <Card 
      sx={{ 
        bgcolor: '#2170a5',
        transition: "background 0.5s, color 0.5s",
        '&:hover': {
          background: "#205375"
        }
      }}
    >
      <CardActionArea onClick={() => cardPage()}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: '#f4a64e'
              }}
            >
              <item.icon fontSize='large' />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: '#f4a64e'
              }}
            >
              <Typography gutterBottom variant='h5' component='div'>
                {item.title}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
