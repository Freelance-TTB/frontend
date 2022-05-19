import React from 'react'
import { Box, Grid } from '@mui/material'
import OptionCard from './OptionCard'
import { useState, useEffect } from 'react'
// import {  } from 'react'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

export default function Option () {
  const [homeCard, setHomeCard] = useState([])

  useEffect(() => {
    const card = [
      {
        id: 1,
        title: 'Sales',
        icon: PointOfSaleIcon,
        router: '/sales'
      },
      {
        id: 2,
        title: 'Purchases',
        icon: ShoppingCartIcon,
        router: '/purchase'
      },
      {
        id: 3,
        title: 'Rekening',
        icon: CreditCardIcon
      },
      {
        id: 4,
        title: 'Accounting',
        icon: AccountBalanceIcon
      },
      {
        id: 5,
        title: 'Apps',
        icon: SmartphoneOutlinedIcon
      },
      {
        id: 6,
        title: 'Settings',
        icon: SettingsOutlinedIcon
      }
    ]

    setHomeCard(card)
  }, [])
  return (
    <Box sx={{ m: 2 }}>
      <Grid container justifyContent='center' spacing={4}>
        {homeCard.map(card => {
          return (
            <Grid item xs={4}>
              <OptionCard key={card.id} item={card} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
