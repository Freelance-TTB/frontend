import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { 
  Paper, 
  Button,
  Box,
  Grid,
  Card,
  Typography
} from '@mui/material'

export default function Example(props)
{
    var items = [
      {
        name: "Cangkir",
        harga: "Rp 200.000,00",
        terjual: "200",
        image: "https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/111/0711123_PE727991_S5.jpg"
      },
      {
        name: "Meja",
        harga: "Rp 300.000,00",
        terjual: "100",
        image: "https://res.cloudinary.com/ruparupa-com/image/upload//f_auto,q_auto:eco/v1572329164/Products/10210604_1.jpg"
      }
    ]

    return (
      
        <Carousel
          sx={{ 
            m: 3
          }}
        >
          {
            items.map( (item, i) => <Item key={i} item={item} /> )
          }
        </Carousel>
    )
}

function Item(props)
{
    return (
      <Box sx={{ m: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">
              <Box sx={{ textAlign: 'center', m: 1 }}>
                Top 10 Penjualan Product
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Card sx={{ p: 2, height: 180 }}>
              <h2>{props.item.name}</h2>
              <p>Harga: {props.item.harga}</p>
              <p>Terjual: {props.item.terjual} unit</p>
            </Card>
          </Grid>
          <Grid item xs={7}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
              <Box
                component="img"
                sx={{
                  mx: 3,
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={props.item.image}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    )
}