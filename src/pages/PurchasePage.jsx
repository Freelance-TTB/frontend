import { styled } from '@mui/material/styles'
import { Grid, Paper } from '@mui/material'
import { useState, useEffect } from 'react'
import CardPurchase from '../components/CardPurchase'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

export default function PurchasePage () {
  const [isActive, setIsActive] = useState(false)
  const [isName, setIsName] = useState('')
  const [isMenuPurchase, setIsMenuPurchase] = useState([])

  useEffect(() => {
    const dataMenuPurchase = [
      {
        name: 'Pembelian',
        title: 'Total Pembelian',
        subtitle1: 'Hari Ini',
        subtitle2: 'Bulan Ini',
        subtitle3: 'Tahun Ini'
      },
      {
        name: 'Hutang',
        title: 'Total Hutang',
        subtitle1: '0 Hari ini',
        subtitle2: '0-30 Hari ini',
        subtitle3: '> 30 Hari'
      },
      {
        name: 'Pembayaran',
        title: 'Total Pembayaran',
        subtitle1: 'Hari Ini',
        subtitle2: 'Bulan Ini',
        subtitle3: 'Tahun Ini'
      },
      {
        name: 'Uang Muka',
        title: 'Uang Muka',
        subtitle1: 'DP Keluar',
        subtitle2: 'DP Masuk',
        subtitle3: 'Saldo DP'
      }
    ]

    setIsMenuPurchase(dataMenuPurchase)
  }, [])
  return (
    <div>
      {/* Total Pembelian // */}
      <div>
        {isActive === true ? (
          isMenuPurchase
            .filter(purchase => purchase.name === isName)
            .map(purchase => {
              return <CardPurchase purchase={purchase} />
            })
        ) : (
          <div
            class='card container border-bottom'
            style={{ width: '92%', height: 370 }}
          >
            <div class='card-body'>
              <button
                type='button'
                class='btn btn-outline-primary mt-4 ml-3'
                style={{ borderRadius: '20%', width: 100 }}
              >
                Top Items
              </button>
              <div
                style={{
                  textAlign: 'center',
                  marginTop: 20
                }}
              >
                <h1>Total Pembayaran</h1>
              </div>
              <div
                style={{
                  marginLeft: 70,
                  marginTop: 20
                }}
              >
                <div class='left-col-card-purchase'>Hari Ini</div>
                <div class='center-col-card-purchase'>Bulan ini</div>
                <div class='right-col-card-purchase'>Tahun Ini</div>
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
                <div class='left-col-card-purchase'>Hari Ini</div>
                <div class='center-col-card-purchase'>Bulan Ini</div>
                <div class='right-col-card-purchase'>Tahun Ini</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        class='container'
        style={{
          marginTop: 50
        }}
      >
        <div>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <button
                type='button'
                class='btn btn-success btn-menu-purchase'
                name='Pembelian'
                onClick={() => {
                  setIsName('Pembelian')
                  setIsActive(true)
                }}
              >
                Pembelian
              </button>
            </Grid>
            <Grid item xs={6}>
              <button
                type='button'
                class='btn btn-danger btn-menu-purchase'
                name='Hutang'
                onClick={() => {
                  setIsName('Hutang')
                  setIsActive(true)
                }}
              >
                Hutang
              </button>
            </Grid>
            <Grid item xs={6}>
              <button
                type='button'
                class='btn btn-primary btn-menu-purchase'
                name='Pembayaran'
                onClick={() => {
                  setIsName('Pembayaran')
                  setIsActive(true)
                }}
              >
                Pembayaran
              </button>
            </Grid>
            <Grid item xs={6}>
              <button
                type='button'
                class='btn btn-info btn-menu-purchase'
                name='Uang Muka'
                onClick={() => {
                  setIsName('Uang Muka')
                  setIsActive(true)
                }}
              >
                Uang Muka
              </button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}
