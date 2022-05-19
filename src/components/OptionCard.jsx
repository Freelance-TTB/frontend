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
    navigate(`/sales`)
  }

  return (
    <Card>
      <CardActionArea onClick={() => cardPage()}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <item.icon fontSize='large' />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center'
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
