import React from 'react'
import { useNavigate } from 'react-router-dom';

import { 
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography
} from '@mui/material';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

export default function OptionCard() {
  const navigate = useNavigate()

  function cardPage() {
    navigate(`/sales`)
  }

  return (
    <Card>
      <CardActionArea
        onClick={() => cardPage()}
      >  
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} 
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <PointOfSaleIcon fontSize='large'/>
            </Grid>
            <Grid item xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                Sales
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
