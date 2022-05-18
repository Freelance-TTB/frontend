import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { 
  CardActionArea,
  Grid
} from '@mui/material';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

export default function OptionCard() {
  return (
    <Card>
      <CardActionArea>  
        <CardContent

        >
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
