import { useState, useEffect } from 'react'
import ChartPenjualan from "./ChartPenjualan"
import CarouselTopItems from "./CarouselTopItems"
import { 
  Button
} from '@mui/material'

export default function CardPurchase ({ purchase }) {

  return (
    <div>
      {(() => {

      if (purchase.name === 'Penjualan') {
        return (
          <ChartPenjualan/>
        )
      } else if (purchase.name === 'Top Item') {
        return (
          <CarouselTopItems/>
        )
      } else {
        return (
          <div>
              
            <div
              style={{
                textAlign: 'center',
                marginTop: 20
              }}
            >
              <h1>{purchase.title}</h1>
            </div>

            <div
              style={{
                marginLeft: 70,
                marginTop: 20
              }}
            >
              <div class='left-col-card-purchase'>{purchase.subtitle1}</div>
              <div class='center-col-card-purchase'>{purchase.subtitle2}</div>
              <div class='right-col-card-purchase'>{purchase.subtitle3}</div>
            </div>
            <div
              style={{
                marginTop: 90
              }}
            >
              <hr class='hr-line-purchase-card' />
            </div>
    
            <div
              style={{
                marginLeft: 70,
                marginTop: 38
              }}
            >
              <div class='left-col-card-purchase'>Rp.0.00,-</div>
              <div class='center-col-card-purchase'>Rp.0.00,-</div>
              <div class='right-col-card-purchase'>Rp.0.00,-</div>
            </div>
          </div>
        )
      }
    })()}
    </div>
  )
}
